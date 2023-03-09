#version 330 core
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec2 aTex;
out vec2 TexCoord;
uniform mat4 view;
uniform mat4 world;
uniform mat4 model;
uniform mat4 projection;

void main() {
    gl_Position = projection * world * view * model * vec4(aPos.xyz, 1);
    TexCoord = aTex;
}