export function translateX(point, vector, scale) {
	const isVector = vector instanceof Object;

	return {
		x: point.x + (isVector ? vector.x : scale),
		y: point.y,
	};
}
