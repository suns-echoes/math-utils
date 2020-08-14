import { isPoint } from '../../check/is-point.js';
import { isVector } from '../../check/is-vector.js';


/**
 * Method translate point coordinates by vector.
 * @method vtranslate
 * @param {Point} point - point to translate
 * @param {Vector} vector - translation vector
 * @return {Point} - translated point
 */
export function vtranslate(point, vector) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not a Point');
	}

	if (!isVector(vector)) {
		throw new TypeError('"vector" is not a Vector');
	}

	return {
		x: point.x + vector.x,
		y: point.y + vector.y,
	};
}
