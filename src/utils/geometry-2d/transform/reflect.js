import { isPoint } from '../../check/is-point.js';

import { ORIGIN_0x0 } from '../../constants.js';


export function reflect(point, origin = ORIGIN_0x0) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not type of Point');
	}

	if (origin !== undefined && !isPoint(origin)) {
		throw new TypeError('"origin" is not type of Point');
	}

	if (origin === ORIGIN_0x0) {
		return {
			x: -point.x,
			y: -point.y,
		};
	}
	else {
		const { x, y } = point;

		return {
			x: x - (x - origin.x) * 2,
			y: y - (y - origin.y) * 2,
		};
	}
}
