import { isPoint } from '../../check/is-point.js';
import { isVector } from '../../check/is-vector.js';

import { ORIGIN_0x0 } from '../../constants.js';


/**
 * Method scales point x coordinate by vector.
 * @method vscaleX
 * @param {Point} point - point to scale
 * @param {Vector} vector - vector coordinates scale factor
 * @param {Point} [origin] - scale origin (def.: (0,0))
 * @return {Point} - point with scaled coordinates
 */
export function vscaleX(point, vector, origin = ORIGIN_0x0) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not a Point');
	}

	if (!isVector(vector)) {
		throw new TypeError('"vector" is not a Vector');
	}

	if (origin !== undefined && !isPoint(origin)) {
		throw new TypeError('"origin" is not a Point');
	}

	if (origin === ORIGIN_0x0) {
		return {
			x: point.x * vector.x,
			y: point.y,
		};
	}
	else {
		const { x: ox } = origin;

		return {
			x: (point.x - ox) * vector.x + ox,
			y: point.y,
		};
	}
}
