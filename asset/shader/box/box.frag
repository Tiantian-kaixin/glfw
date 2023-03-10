#version 330 core

struct Light {
    vec3 position;
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
};

struct Material {
    sampler2D texture;
    sampler2D textureSpecular;
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
    float shininess;
};

uniform vec3 cameraPos;
uniform Light light;
uniform Material material;
out vec4 FragColor;
in vec3 aNorm;
in vec4 aFragPos;
in vec2 aTex;

void main() {
    vec3 newNorm = texture(material.textureSpecular, aTex).xyz;
    vec3 ambient = light.ambient * texture(material.texture, aTex).xyz;
    vec3 diffuse = light.diffuse * texture(material.texture, aTex).xyz * max(dot(normalize(aNorm), normalize(light.position - aFragPos.xyz)), 0.f);
    vec3 specular = light.specular * material.specular * pow(max(dot(normalize(light.position + cameraPos - 2.f * aFragPos.xyz), normalize(newNorm)), 0.f), material.shininess);
    FragColor = vec4(diffuse + specular + ambient, 1.f);
}