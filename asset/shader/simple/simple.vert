#version 300 core
layout(location = 0) in vec3 aPos;
void main() {
    gl_position = vec4(aPos.xyz, 1);
}