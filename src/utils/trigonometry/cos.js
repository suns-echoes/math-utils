/**
 * Method calculates cosine value.
 * @method cos
 * @param {number} theta - angle in radians
 * @return {number} - cosine value
 */
export function cos(theta) {
	if (typeof theta !== 'number') {
		throw new TypeError('"theta" is not a number');
	}

	return Math.cos(theta);
}
