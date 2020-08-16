/**
 * Method checks if the thing is point.
 * @method isPoint
 * @param {any} p - the thing to check
 * @return {boolean} - true if the thing is point
 */
export function isPoint(p) {
	return (
		p instanceof Object &&
		typeof p.x === 'number' &&
		typeof p.y === 'number'
	);
}
