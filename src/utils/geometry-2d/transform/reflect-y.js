import { isPoint } from '../../check/is-point.js';

import { ORIGIN_0x0 } from '../../constants.js';


/**
 * Method reflects point x coordinate over origin point.
 * @method reflectY
 * @param {Point} point - point to reflect
 * @param {Point} origin - reflection origin
 * @return {Point} - reflected point
 */
export function reflectY(point, origin = ORIGIN_0x0) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not a Point');
	}

	if (origin !== undefined && !isPoint(origin)) {
		throw new TypeError('"origin" is not a Point');
	}

	if (origin === ORIGIN_0x0) {
		return {
			x: point.x,
			y: -point.y,
		};
	}
	else {
		const { y } = point;

		return {
			x: point.x,
			y: y - (y - origin.y) * 2,
		};
	}
}
