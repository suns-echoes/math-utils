import { isPoint } from '../../check/is-point.js';

import { ORIGIN_0x0 } from '../../constants.js';


/**
 * Method scales point x coordinate.
 * @method scaleX
 * @param {Point} point - point to scale
 * @param {number} x - x coordinate scale factor
 * @param {Point} [origin] - scale origin (def.: (0,0))
 * @return {Point} - point with scaled coordinate
 */
export function scaleX(point, x, origin = ORIGIN_0x0) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not a Point');
	}

	if (typeof x !== 'number') {
		throw new TypeError('"x" is not a number');
	}

	if (origin !== undefined && !isPoint(origin)) {
		throw new TypeError('"origin" is not a Point');
	}

	if (origin === ORIGIN_0x0) {
		return {
			x: point.x * x,
			y: point.y,
		};
	}
	else {
		const { x: ox } = origin;

		return {
			x: (point.x - ox) * x + ox,
			y: point.y,
		};
	}
}
