/**
 * Method calculates versus sine value.
 * @method versin
 * @param {number} theta - angle in radians
 * @return {number} - versus sine value
 */
export function versin(theta) {
	if (typeof theta !== 'number') {
		throw new TypeError('"theta" is not a number');
	}

	return 1 - Math.cos(theta);
}
