export function isVector(p) {
	return (
		p instanceof Object &&
		typeof p.x === 'number' &&
		typeof p.y === 'number'
	);
}
