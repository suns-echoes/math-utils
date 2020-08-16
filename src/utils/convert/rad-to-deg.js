/**
 * Method converts radians to degrees.
 * @method radToDeg
 * @param {number} radians - angle in radians
 * @return {number} - angle in degrees
 */
export function radToDeg(radians) {
	if (typeof radians !== 'number') {
		throw new TypeError('"radians" is not a number');
	}

	return radians * 180 / Math.PI;
}
