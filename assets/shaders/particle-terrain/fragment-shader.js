export const fragmentShader = `
varying vec3 vUv;
varying float vTime;
varying float vZ;
uniform sampler2D texture;
uniform vec3 tintColor;

float map(float value, float oldMin, float oldMax, float newMin, float newMax) {
    return newMin + (newMax - newMin) * (value - oldMin) / (oldMax - oldMin);
}

void main()
{
    vec3 colorA = vec3(.6, 0.17, 0.17);
    vec3 colorB = vec3(0.17, 0.8, .7); 
    float alpha = map(vZ / 2., -1. / 2., 30. / 2., 0.17, 1.); 
    vec3 color = vec3(.5, .5, .6) * tintColor;

    gl_FragColor = vec4( color, alpha);
    gl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );
}
`;
