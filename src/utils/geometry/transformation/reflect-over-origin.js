import { ORIGIN_0x0 } from '../../constants/origin.js';


export function reflectOverOrigin(point, origin = ORIGIN_0x0) {
	const { x, y } = point;
	const { x: ox, y: oy } = origin;
	const dx = x - ox;
	const dy = y - oy;

	return {
		x: x - dx * 2,
		y: y - dy * 2,
	};
}
