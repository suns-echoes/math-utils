import { isPoint } from './is-point.js';


/**
 * Method checks if two points have the same coordinates.
 * @method pointEqualPoint
 * @param {Point} pointA - first point
 * @param {Point} pointB - second point
 * @return {boolean} - true if two points have the same coordinates
 */
export function pointEqualPoint(pointA, pointB) {
	if (!isPoint(pointA)) {
		throw new TypeError('"pointA is not a Point');
	}

	if (!isPoint(pointB)) {
		throw new TypeError('"pointB is not a Point');
	}

	return (
		pointA === pointB ||
		pointA.x === pointB.x && pointA.y === pointB.y
	);
}
