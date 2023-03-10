#version 330 core

uniform vec3 lightColor;
uniform vec3 lightPos;
uniform vec3 objectColor;
uniform vec3 cameraPos;

out vec4 FragColor;
in vec3 aNorm;
in vec4 aFragPos;

void main() {
    float diffuse = max(dot(normalize(aNorm), normalize(lightPos - aFragPos.xyz)), 0.f);
    float ambient = 0.1f;
    float reflect = pow(max(dot(normalize(lightPos + cameraPos - 2.f * aFragPos.xyz), normalize(aNorm)), 0.f), 32.f);
    FragColor = vec4(objectColor * lightColor * (diffuse + reflect + ambient), 1.f);
}