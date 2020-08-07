export function rotate(point, theta, clockwise = true) {
	const { x, y } = point;
	const cos = Math.cos(theta);
	const sin = Math.sin(theta);

	if (clockwise) {
		return {
			x: x * cos + y * sin,
			y: -x * sin + y * cos,
		};
	}
	else {
		return {
			x: x * cos - y * sin,
			y: x * sin + y * cos,
		};
	}
}
