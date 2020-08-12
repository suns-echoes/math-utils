import { ORIGIN_0x0 } from '../../constants.js';


export function distance(point, origin = ORIGIN_0x0) {
	if (origin === ORIGIN_0x0) {
		return Math.sqrt(point.x ** 2 + point.y ** 2);
	}
	else {
		return Math.abs(Math.sqrt((point.x - origin.x) ** 2 + (point.y - origin.y) ** 2));
	}
}
