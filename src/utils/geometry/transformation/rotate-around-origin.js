import { ORIGIN_0x0 } from '../../constants/origin.js';


export function rotateAroundOrigin(point, theta, origin = ORIGIN_0x0) {
	const { x, y } = point;
	const c = Math.cos(theta);
	const s = Math.sin(theta);

	if (origin === ORIGIN_0x0) {
		return {
			x: c * x - s * y,
			y: s * x + c * y,
		};
	}
	else {
		const { x: ox, y: oy } = origin;

		return {
			x: c * (x - ox) - s * (y - oy) + ox,
			y: s * (x - ox) + c * (y - oy) + oy,
		};
	}
}
