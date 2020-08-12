import { angleBetweenTreePoints } from '../../trigonometry/angle-between-tree-points.js';
import { rotate } from './rotate.js';

export function reflectOverLine(point, linePointA, linePointB) {
	const theta = angleBetweenTreePoints(linePointA, point, linePointB);

	return rotate(point, theta * 2, linePointA, false);
}
