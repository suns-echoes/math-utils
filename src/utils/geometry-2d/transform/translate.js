import { isPoint } from '../../check/is-point.js';


/**
 * Method translate point coordinates.
 * @method translate
 * @param {Point} point - point to translate
 * @param {number} [x] - x axis translation (def.: 0)
 * @param {number} [y] - y axis translation (def.: 0)
 * @return {Point} - translated point
 */
export function translate(point, x = 0, y = 0) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not type of Point');
	}

	if (y !== undefined && typeof x !== 'number') {
		throw new TypeError('"x" is not type of number');
	}

	if (y !== undefined && typeof y !== 'number') {
		throw new TypeError('"y" is not type of number');
	}

	return {
		x: point.x + x,
		y: point.y + y,
	};
}
