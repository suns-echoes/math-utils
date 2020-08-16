/**
 * Method checks if the thing is vector.
 * @method isVector
 * @param {any} v - the thing to check
 * @return {boolean} - true if the thing is vector
 */
export function isVector(v) {
	return (
		v instanceof Object &&
		typeof v.x === 'number' &&
		typeof v.y === 'number'
	);
}
