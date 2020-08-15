import { FIX_FLOAT } from '../constants.js';


/**
 * Method fixes float precision error.
 * @method fixFloat
 * @param {number} number - number to fix
 * @return {number} - fixed number
 */
export function fixFloat(number) {
	if (typeof number !== 'number') {
		throw new TypeError('"number" in not a number');
	}

	const defaultPrecision = FIX_FLOAT.PRECISION.DEFAULT;

	return Math.round(number * 10 ** defaultPrecision) / 10 ** defaultPrecision;
}
