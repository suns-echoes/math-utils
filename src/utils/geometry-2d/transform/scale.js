import { isPoint } from '../../check/is-point.js';

import { ORIGIN_0x0 } from '../../constants.js';


/**
 * Method scales point x and y coordinates.
 * @method scale
 * @param {Point} point - point to scale
 * @param {number} x - x coordinate scale factor
 * @param {number} [y] - y coordinate scale factor (def.: equal to "x")
 * @param {Point} [origin] - scale origin (def.: (0,0))
 * @return {Point} - point with scaled coordinates
 */
export function scale(point, x, y = x, origin = ORIGIN_0x0) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not a Point');
	}

	if (typeof x !== 'number') {
		throw new TypeError('"x" is not a number');
	}

	if (y !== undefined && typeof y !== 'number') {
		throw new TypeError('"y" is not a number');
	}

	if (origin !== undefined && !isPoint(origin)) {
		throw new TypeError('"origin" is not a Point');
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
