import { ORIGIN_0x0 } from '../../constants.js';


/**
 * Method calculates distance from point to origin.
 * @method distance
 * @param {Point} point - point
 * @param {Point} [origin] - origin point
 * @return {number} - distance between point and origin
 */
export function distance(point, origin = ORIGIN_0x0) {
	if (origin === ORIGIN_0x0) {
		return Math.sqrt(point.x ** 2 + point.y ** 2);
	}
	else {
		return Math.abs(Math.sqrt((point.x - origin.x) ** 2 + (point.y - origin.y) ** 2));
	}
}
