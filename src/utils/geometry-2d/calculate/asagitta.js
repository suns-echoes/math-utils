import { versin } from '../../trigonometry/versin.js';


/**
 * Method calculates sagitta from radius and angle.
 * @method asagitta
 * @param {number} radius - circle radius
 * @param {number} theta - circle segment angle in radians
 * @return {number} - sagitta height
 */
export function asagitta(radius, theta) {
	if (typeof radius !== 'number') {
		throw new TypeError('"radius" is not a number');
	}

	if (typeof theta !== 'number') {
		throw new TypeError('"theta" is not a number');
	}

	if (radius < 0) {
		throw new Error('"radius" must not be less than zero');
	}

	if (theta < 0 || theta > Math.PI) {
		throw new Error('"theta" must not be less than zero nor greater than π rad (180°)');
	}

	if (radius === 0 || theta === 0) {
		return 0;
	}

	return radius * versin(theta / 2);
}
