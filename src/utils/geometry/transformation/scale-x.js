export function scaleX(point, x = 1) {
	const isVector = x instanceof Object;

	return {
		x: point.x * (isVector ? x.x : x),
		y: point.y,
	};
}
