export function scale(point, vector, scaleX, scaleY = scaleX) {
	const isScaleVector = vector instanceof Object;
	const sx = isScaleVector ? vector.x : scaleX;
	const sy = isScaleVector ? vector.y : scaleY;

	return {
		x: point.x * sx,
		y: point.y * sy,
	};
}
