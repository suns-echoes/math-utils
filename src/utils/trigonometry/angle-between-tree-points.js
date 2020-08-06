export function angleBetweenTreePoints(centerPoint, pointA, pointB) {
	const { x, y } = centerPoint;
	const { x: ax, y: ay } = pointA;
	const { x: bx, y: by } = pointB;

	return Math.atan2(by - y, bx - x) - Math.atan2(ay - y, ax - x);
}
