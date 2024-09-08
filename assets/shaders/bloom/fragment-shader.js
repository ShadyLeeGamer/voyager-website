export const fragmentShader = `
uniform sampler2D baseTexture;
uniform sampler2D bloomTexture;

varying vec2 vUv;

void main() {
    vec4 base_color = texture2D(baseTexture, vUv);
    vec4 bloom_color = texture2D(bloomTexture, vUv);

    float lum = 0.21 * bloom_color.r + 0.71 * bloom_color.g + 0.07 * bloom_color.b;
    gl_FragColor = vec4(base_color.rgb + bloom_color.rgb, max(base_color.a, lum));
}
`;
