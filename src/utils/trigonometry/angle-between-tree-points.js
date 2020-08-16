import { isPoint } from '../check/is-point.js';
import { pointEqualPoint } from '../check/point-equal-point.js';


/**
 * Method calculates angle between 3 points.
 * @method angleBetweenTreePoints
 * @param {Point} centerPoint - center point where angle will be calculated
 * @param {Point} pointA - first arm point
 * @param {Point} pointB - second arm point
 * @returns {number} - angle in radians
 */
export function angleBetweenTreePoints(centerPoint, pointA, pointB) {
	if (!isPoint(centerPoint)) {
		throw new TypeError('"centerPoint" is not a Point');
	}

	if (!isPoint(pointA)) {
		throw new TypeError('"pointA" is not a Point');
	}

	if (!isPoint(pointB)) {
		throw new TypeError('"pointB" is not a Point');
	}

	const { x, y } = centerPoint;
	const { x: ax, y: ay } = pointA;
	const { x: bx, y: by } = pointB;

	if (pointEqualPoint(pointA, centerPoint)) {
		throw new Error('"pointA" must not have the same coordinates as "centerPoint"');
	}

	if (pointEqualPoint(pointB, centerPoint)) {
		throw new Error('"pointB" must not have the same coordinates as "centerPoint"');
	}

	if (pointEqualPoint(pointA, pointB)) {
		return 0;
	}

	return Math.atan2(by - y, bx - x) - Math.atan2(ay - y, ax - x);
}
