/**
 * Method calculates sine value.
 * @method sin
 * @param {number} theta - angle in radians
 * @return {number} - sine value
 */
export function sin(theta) {
	if (typeof theta !== 'number') {
		throw new TypeError('"theta" is not a number');
	}

	return Math.sin(theta);
}
