import { isPoint } from '../../check/is-point.js';


/**
 * Method translate point coordinates.
 * @method translate
 * @param {Point} point - point to translate
 * @param {number} x - x axis translation
 * @param {number} y - y axis translation
 * @return {Point} - translated point
 */
export function translate(point, x, y) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not a Point');
	}

	if (typeof x !== 'number') {
		throw new TypeError('"x" is not a number');
	}

	if (typeof y !== 'number') {
		throw new TypeError('"y" is not a number');
	}

	return {
		x: point.x + x,
		y: point.y + y,
	};
}
