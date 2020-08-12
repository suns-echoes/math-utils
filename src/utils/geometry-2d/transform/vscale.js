import { isPoint } from '../../check/is-point.js';
import { isVector } from '../../check/is-vector.js';

import { ORIGIN_0x0 } from '../../constants.js';


/**
 * Scale point x and y coordinates by vector.
 * @param {Point} point - point to scale
 * @param {Vector} vector - vector coordinates scale factor
 * @param {Point} - optional, scale origin (def.: (0,0))
 */
export function vscale(point, vector, origin = ORIGIN_0x0) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not type of Point');
	}

	if (!isVector(vector)) {
		throw new TypeError('"vector" is not type of Vector');
	}

	if (origin !== undefined && !isPoint(origin)) {
		throw new TypeError('"origin" is not type of Point');
	}

	if (origin === ORIGIN_0x0) {
		return {
			x: point.x * vector.x,
			y: point.y * vector.y,
		};
	}
	else {
		const { x: ox, y: oy } = origin;

		return {
			x: (point.x - ox) * vector.x + ox,
			y: (point.y - oy) * vector.y + oy,
		};
	}
}
