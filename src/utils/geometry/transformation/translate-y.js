export function translateY(point, vector, scale) {
	const isVector = vector instanceof Object;

	return {
		x: point.x,
		y: point.y + (isVector ? vector.y : scale),
	};
}
