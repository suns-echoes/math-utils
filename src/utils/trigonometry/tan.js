/**
 * Method calculates tangent value.
 * @method tan
 * @param {number} theta - angle in radians
 * @return {number} - tangent value
 */
export function tan(theta) {
	if (typeof theta !== 'number') {
		throw new TypeError('"theta" is not a number');
	}

	return Math.tan(theta);
}
