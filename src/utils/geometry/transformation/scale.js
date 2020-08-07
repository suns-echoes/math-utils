export function scale(point, x = 1, y = x) {
	const isVector = x instanceof Object;

	return {
		x: point.x * (isVector ? x.x : x),
		y: point.y * (isVector ? x.y : y),
	};
}
