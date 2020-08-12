import { isPoint } from '../../check/is-point.js';
import { isVector } from '../../check/is-vector.js';

import { ORIGIN_0x0 } from '../../constants.js';


/**
 * Scale point y coordinate.
 * @param {Point} point - point to scale
 * @param {number} y - scale y coordinate
 * @param {Point} - optional, scale origin (def.: (0,0))
 */
export function scaleY(point, y, origin = ORIGIN_0x0) {
	const useVector = isVector(y);

	if (!isPoint(point)) {
		throw new TypeError('"point" is not type of Point');
	}

	if (!useVector && typeof y !== 'number') {
		throw new TypeError('"y" is not type of number nor Vector');
	}

	if (origin !== undefined && !isPoint(origin)) {
		throw new TypeError('"origin" is not type of Point');
	}

	if (origin === ORIGIN_0x0) {
		return {
			x: point.x,
			y: point.y * (useVector ? y.y : y),
		};
	}
	else {
		const { y: oy } = origin;

		return {
			x: point.x,
			y: (point.y - oy) * (useVector ? y.y : y) + oy,
		};
	}
}
