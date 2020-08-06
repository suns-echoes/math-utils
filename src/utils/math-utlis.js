import { ORIGIN_0x0 } from './constants/origin.js';
import { geometryCalculation } from './geometry/calculation.js';
import { versin } from './trigonometry/versin.js';


const geometry = {
	calculation: geometryCalculation,
}

const trigonometry = {
	versin,
};


export const MathUtils = {
	ORIGIN_0x0,
	geometry,
	trigonometry,
};
