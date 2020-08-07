export function scaleY(point, y) {
	const isVector = y instanceof Object;

	return {
		x: point.x,
		y: point.y * (isVector ? y.y : y),
	};
}
