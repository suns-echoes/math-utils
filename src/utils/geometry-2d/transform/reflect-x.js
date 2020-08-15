import { isPoint } from '../../check/is-point.js';

import { ORIGIN_0x0 } from '../../constants.js';


/**
 * Method reflects point x coordinate over origin point.
 * @method reflectX
 * @param {Point} point - point to reflect
 * @param {Point} origin - reflection origin
 * @return {Point} - reflected point
 */
export function reflectX(point, origin = ORIGIN_0x0) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not a Point');
	}

	if (origin !== undefined && !isPoint(origin)) {
		throw new TypeError('"origin" is not a Point');
	}

	if (origin === ORIGIN_0x0) {
		return {
			x: -point.x,
			y: point.y,
		};
	}
	else {
		const { x } = point;

		return {
			x: x - (x - origin.x) * 2,
			y: point.y,
		};
	}
}
