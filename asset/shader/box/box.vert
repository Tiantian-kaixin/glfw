#version 330 core

layout(location = 0) in vec3 Pos;
layout(location = 1) in vec3 Norm;
layout(location = 2) in vec2 Tex;

uniform mat4 view;
uniform mat4 model;
uniform mat4 projection;
out vec3 aNorm;
out vec4 aFragPos;
out vec2 aTex;

void main() {
    aFragPos = model * vec4(Pos, 1.f);
    gl_Position = projection * view * aFragPos;
    aNorm = Norm;
    aTex = Tex;
}