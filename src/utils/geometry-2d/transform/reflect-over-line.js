import { isPoint } from '../../check/is-point.js';

import { angleBetweenTreePoints } from '../../trigonometry/angle-between-tree-points.js';
import { rotate } from './rotate.js';


/**
 * Method reflects point over line plotted by two points.
 * @method reflectOverLine
 * @param {Point} point - point to reflect
 * @param {Point} linePointA - first point on line
 * @param {Point} linePointB - second point on line
 * @return {Point} - reflected point
 */
export function reflectOverLine(point, linePointA, linePointB) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not a Point');
	}

	if (!isPoint(linePointA)) {
		throw new TypeError('"linePointA" is not a Point');
	}

	if (!isPoint(linePointB)) {
		throw new TypeError('"linePointB" is not a Point');
	}

	if (linePointA.x === linePointB.x && linePointA.y === linePointB.y) {
		throw new Error('"linePointA" and "linePointB" must not have the same coordinates');
	}

	const theta = angleBetweenTreePoints(linePointA, point, linePointB);

	return rotate(point, theta * 2, linePointA, false);
}
