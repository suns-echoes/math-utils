import { ORIGIN_0x0 } from '../../constants/origin.js';


export function distanceFromOrigin(point, origin = ORIGIN_0x0) {
	return Math.abs(Math.sqrt((point.x - origin.x) ** 2 + (point.y - origin.y) ** 2));
}
