/**
 * Method calculates sagitta from radius and segment width.
 * @method asagitta
 * @param {number} radius - circle radius
 * @param {number} width - circle segment width
 * @return {number} - sagitta height
 */
export function sagitta(radius, width) {
	if (typeof radius !== 'number') {
		throw new TypeError('"radius" is not a number');
	}

	if (typeof width !== 'number') {
		throw new TypeError('"width" is not a number');
	}

	if (radius < 0) {
		throw new Error('"radius" must not be less than zero');
	}

	if (width < 0) {
		throw new Error('"width" must not be less than zero');
	}

	if (radius * 2 < width) {
		throw new Error('"width" must not exceed twice the "radius"');
	}

	if (radius === 0 || width === 0) {
		return 0;
	}

	return radius - Math.sqrt(radius ** 2 - (width / 2) ** 2);
}
