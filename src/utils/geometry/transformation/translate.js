export function translate(point, x = 0, y = 0) {
	const isVector = x instanceof Object;

	return {
		x: point.x + (isVector ? x.x : x),
		y: point.y + (isVector ? x.y : y),
	};
}
