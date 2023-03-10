#version 330 core

uniform vec4 lightColor;
uniform vec3 lightPos;
uniform vec4 objectColor;

out vec4 FragColor;
in vec3 aNorm;
in vec4 aFragPos;

void main() {
//    float diffuse = max(dot(normalize(aNorm), normalize(lightPos - aFragPos.xyz)), 0.f);
//    vec4 ambient = lightColor * 0.5f;
//    FragColor = vec4(objectColor.xyz * diffuse, 1.f);

    // ambient
    float ambientStrength = 0.1;
    vec4 ambient = ambientStrength * lightColor;

    // diffuse
    vec3 norm = normalize(aNorm);
    vec3 lightDir = normalize(lightPos - aFragPos.xyz);
    float diff = max(dot(norm, lightDir), 0.0);
    vec4 diffuse = diff * lightColor;
    FragColor = (diffuse) * objectColor;
}