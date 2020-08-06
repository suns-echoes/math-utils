export function translate(point, vector) {
	return {
		x: point.x + vector.x,
		y: point.y + vector.y,
	}
}
