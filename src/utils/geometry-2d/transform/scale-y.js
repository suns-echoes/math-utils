import { isPoint } from '../../check/is-point.js';

import { ORIGIN_0x0 } from '../../constants.js';


/**
 * Method scales point y coordinate.
 * @method scaleY
 * @param {Point} point - point to scale
 * @param {number} y - y coordinate scale factor
 * @param {Point} [origin] - scale origin (def.: (0,0))
 * @return {Point} - point with scaled coordinate
 */
export function scaleY(point, y, origin = ORIGIN_0x0) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not a Point');
	}

	if (typeof y !== 'number') {
		throw new TypeError('"y" is not a number');
	}

	if (origin !== undefined && !isPoint(origin)) {
		throw new TypeError('"origin" is not a Point');
	}

	if (origin === ORIGIN_0x0) {
		return {
			x: point.x,
			y: point.y * y,
		};
	}
	else {
		const { y: oy } = origin;

		return {
			x: point.x,
			y: (point.y - oy) * y + oy,
		};
	}
}
