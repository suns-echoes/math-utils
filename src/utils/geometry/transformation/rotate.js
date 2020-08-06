export function rotate(point, theta) {
	const { x, y } = point;
	const c = Math.cos(theta);
	const s = Math.sin(theta);

	return {
		x: c * x - s * y,
		y: s * x + c * y,
	};
}
