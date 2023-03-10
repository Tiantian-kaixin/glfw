#version 330 core

struct Light {
    vec3 position;
    vec3 ambient;
    vec3 diffuse;
    vec3 specular;
};

struct Material {
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

void main() {
    vec3 ambient = light.ambient * material.ambient;
    vec3 diffuse = light.diffuse * material.diffuse * max(dot(normalize(aNorm), normalize(light.position - aFragPos.xyz)), 0.f);
    vec3 specular = light.specular * material.specular * pow(max(dot(normalize(light.position + cameraPos - 2.f * aFragPos.xyz), normalize(aNorm)), 0.f), material.shininess);
    FragColor = vec4(diffuse + specular + ambient, 1.f);
}