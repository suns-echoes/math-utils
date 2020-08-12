import { isPoint } from '../../check/is-point.js';

import { ORIGIN_0x0 } from '../../constants.js';


/**
 * Scale point x and y coordinates.
 * @param {Point} point - point to scale
 * @param {number} x - x coordinate sacle factor
 * @param {number} y - optional, y coordinate scale factor (def.: equal to "x")
 * @param {Point} - optional, scale origin (def.: (0,0))
 */
export function scale(point, x, y = x, origin = ORIGIN_0x0) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not type of Point');
	}

	if (typeof x !== 'number') {
		throw new TypeError('"x" is not type of number');
	}

	if (y !== undefined && typeof y !== 'number') {
		throw new TypeError('"y" is not type of number');
	}

	if (origin !== undefined && !isPoint(origin)) {
		throw new TypeError('"origin" is not type of Point');
	}

	if (origin === ORIGIN_0x0) {
		return {
			x: point.x * x,
			y: point.y * y,
		};
	}
	else {
		const { x: ox, y: oy } = origin;

		return {
			x: (point.x - ox) * x + ox,
			y: (point.y - oy) * y + oy,
		};
	}
}
