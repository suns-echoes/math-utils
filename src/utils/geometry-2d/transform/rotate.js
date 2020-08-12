import { isPoint } from '../../check/is-point.js';

import { ORIGIN_0x0 } from '../../constants.js';


/**
 * Rotate point around origin.
 * @method rotate
 * @param {Point} point - point to rotate
 * @param {number} theta - rotation angle in radians
 * @param {Point} origin - rotation origin
 * @param {boolean} clockwise - rotate clockwise
 * @return {Point} - rotated point
 */
export function rotate(point, theta, origin = ORIGIN_0x0, clockwise = true) {
	if (!isPoint(point)) {
		throw new TypeError('"point" is not type of Point');
	}

	if (typeof theta !== 'number') {
		throw new TypeError('"theta" is not type of number');
	}

	if (origin !== undefined && !isPoint(origin)) {
		throw new TypeError('"origin" is not type of Point');
	}

	if (typeof clockwise !== 'boolean') {
		throw new TypeError('"clockwise" is not type of boolean');
	}

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
