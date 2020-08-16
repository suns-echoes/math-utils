/**
 * Method converts degrees to radians.
 * @method radToDeg
 * @param {number} radians - angle in degrees
 * @return {number} - angle in radians
 */
export function degToRad(degrees) {
	if (typeof degrees !== 'number') {
		throw new TypeError('"degrees" is not a number');
	}

	return Math.PI / 180 * degrees;
}
