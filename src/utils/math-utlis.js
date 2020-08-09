import { ORIGIN_0x0 } from './constants/origin.js';

import { degToRad } from './convert/deg-to-rad.js';
import { radToDeg } from './convert/rad-to-deg.js';

import { geometryCalculation } from './geometry/calculation.js';

import { versin } from './trigonometry/versin.js';

import { fixFloat } from './tools/fix-float.js';


const convert = {
	degToRad,
	radToDeg,
};

const geometry = {
	calculation: geometryCalculation,
};

const trigonometry = {
	versin,
};

const tools = {
	fixFloat,
};


export const MathUtils = {
	ORIGIN_0x0,
	convert,
	geometry,
	tools,
	trigonometry,
};
