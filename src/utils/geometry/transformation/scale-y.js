export function scaleX(point, scaleY) {
	return {
		x: point.x,
		y: point.y * scaleY,
	};
}
