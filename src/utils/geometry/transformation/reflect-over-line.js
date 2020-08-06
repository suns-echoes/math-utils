import { angleBetweenTreePoints } from '../../trigonometry/angle-between-tree-points.js';
import { rotateAroundOrigin } from './rotate-around-origin.js';

export function reflectOverLine(point, linePointA, linePointB) {
	const theta = angleBetweenTreePoints(linePointA, point, linePointB);

	return rotateAroundOrigin(point, theta * 2, linePointA);
}
