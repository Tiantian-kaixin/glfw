#version 330 core

uniform vec3 lightColor;
uniform vec3 lightPos;
uniform vec3 objectColor;

out vec4 FragColor;
in vec3 aNorm;
in vec4 aFragPos;

void main() {
    float diffuse = max(dot(normalize(aNorm), normalize(lightPos - aFragPos.xyz)), 0.f);
    vec3 ambient = lightColor * 0.1f;
    FragColor = vec4(objectColor * (ambient + lightColor * diffuse), 1.f);
}