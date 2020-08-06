import { reflect } from './transformation/reflect.js';
import { reflectOverLine } from './transformation/reflect-over-line.js';
import { reflectOverOrigin } from './transformation/reflect-over-origin.js';
import { reflectX } from './transformation/reflect-x.js';
import { reflectY } from './transformation/reflect-y.js';
import { rotate } from './transformation/rotate.js';
import { rotateAroundOrigin } from './transformation/rotate-around-origin.js';
import { translate } from './transformation/translate.js';
import { scale } from './transformation/scale.js';
import { scaleX } from './transformation/scale-x.js';
import { scaleY } from './transformation/scale-y.js';


export const geometryTransformation = {
	reflect,
	reflectOverLine,
	reflectOverOrigin,
	reflectX,
	reflectY,
	rotate,
	rotateAroundOrigin,
	translate,
	scale,
	scaleX,
	scaleY,
};
