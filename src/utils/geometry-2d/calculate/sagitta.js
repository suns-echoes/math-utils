import { versin } from '../../trigonometry/versin.js';


export function sagitta(radius, length, theta) {
	if (typeof radius !== 'number') {
		throw new TypeError('The "radius" argument must be a number.');
	}
	else if (radius === 0) {
		return 0;
	}
	else if (typeof length === 'number') {
		if (length === 0) {
			return 0;
		}

		return radius - Math.sqrt(radius ** 2 - (length / 2) ** 2);
	}
	else if (typeof theta === 'number') {
		if (theta === 0) {
			return 0;
		}

		return radius * versin(theta / 2);
	}
	else {
		throw new TypeError('Either "length" or "theta" argument must be a number.');
	}
}
