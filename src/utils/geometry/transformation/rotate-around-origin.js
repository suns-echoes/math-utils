import { ORIGIN_0x0 } from '../../constants/origin.js';


export function rotateAroundOrigin(point, theta, origin = ORIGIN_0x0, clockwise = true) {
	const { x, y } = point;
	const cos = Math.cos(theta);
	const sin = Math.sin(theta);

	if (origin === ORIGIN_0x0) {
		if (clockwise) {
			return {
				x: x * cos + y * sin,
				y: -x * sin + y * cos,
			};
		}
		else {
			return {
				x: x * cos - y * sin,
				y: x * sin + y * cos,
			};
		}
	}
	else {
		const { x: ox, y: oy } = origin;
		const xo = x - ox;
		const yo = y - oy;

		if (clockwise) {
			return {
				x: xo * cos + yo * sin + ox,
				y: -xo * sin + yo * cos + oy,
			};
		}
		else {
			return {
				x: xo * cos - yo * sin + ox,
				y: xo * sin + yo * cos + oy,
			};
		}
	}
}
