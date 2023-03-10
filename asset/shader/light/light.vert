#version 330 core

layout(location = 0) in vec3 Pos;
layout(location = 1) in vec3 Norm;

uniform mat4 view;
uniform mat4 model;
uniform mat4 projection;
out vec3 aNorm;
out vec4 aFragPos;

void main() {
    aFragPos = vec4(Pos, 1.f);
    gl_Position = projection * view * aFragPos;
    aNorm = Norm;
}