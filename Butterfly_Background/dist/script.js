import { butterfliesBackground } from 'https://unpkg.com/threejs-toys@0.0.7/build/threejs-toys.module.cdn.min.js'

const pc = butterfliesBackground({
	el: document.getElementById('app'),
	eventsEl: document.body,
  gpgpuSize: 42,
	background: 0xffffff,
	material: 'basic',
	materialParams: { transparent: true, alphaTest: 0.5 },
	texture: 'https://assets.codepen.io/33787/butterflies.png',
	textureCount: 4,
	wingsScale: [1, 1, 1],
	wingsWidthSegments: 8,
	wingsHeightSegments: 8,
	wingsSpeed: 0.75,
	wingsDisplacementScale: 1.25,
	noiseCoordScale: 0.01,
	noiseTimeCoef: 0.0005,
	noiseIntensity: 0.0025,
	attractionRadius1: 100,
	attractionRadius2: 150,
	maxVelocity: 0.1,
});