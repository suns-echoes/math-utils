export function isPoint(p) {
	return (
		p instanceof Object &&
		typeof p.x === 'number' &&
		typeof p.y === 'number'
	);
}
