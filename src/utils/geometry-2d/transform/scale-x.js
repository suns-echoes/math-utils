import { isPoint } from '../../check/is-point.js';
import { isVector } from '../../check/is-vector.js';

import { ORIGIN_0x0 } from '../../constants.js';


/**
 * Scale point x coordinate.
 * @param {Point} point - point to scale
 * @param {number} x - scale x coordinate
 * @param {Point} - optional, scale origin (def.: (0,0))
 */
export function scaleX(point, x, origin = ORIGIN_0x0) {
	const useVector = isVector(x);

	if (!isPoint(point)) {
		throw new TypeError('"point" is not type of Point');
	}

	if (!useVector && typeof x !== 'number') {
		throw new TypeError('"x" is not type of number nor Vector');
	}

	if (origin !== undefined && !isPoint(origin)) {
		throw new TypeError('"origin" is not type of Point');
	}

	if (origin === ORIGIN_0x0) {
		return {
			x: point.x * (useVector ? x.x : x),
			y: point.y,
		};
	}
	else {
		const { x: ox } = origin;

		return {
			x: (point.x - ox) * (useVector ? x.x : x) + ox,
			y: point.y,
		};
	}
}
