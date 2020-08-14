import { FIX_FLOAT } from './fix-float.config.js';


/**
 * Method sets precision for fixFloat method.
 * @method setFixFloatPrecision
 * @param {number} precision - decimal places, integer <0,FIX_FLOAT.PRECISION.MAXIMUM>
 * @return void
 */
export function setFixFloatPrecision(precision = FIX_FLOAT.PRECISION.MAXIMUM) {
	if (typeof precision !== 'number') {
		throw new TypeError('"precision" in not a number');
	}

	if (precision < 0) {
		throw new Error('"precision" must not be less than 0');
	}

	if (precision > FIX_FLOAT.PRECISION.MAXIMUM) {
		throw new Error(`"precision" must not be greater than ${FIX_FLOAT.PRECISION.MAXIMUM}`);
	}

	if (precision !== Math.round(precision)) {
		throw new Error('"precision" must be an integer');
	}

	FIX_FLOAT.PRECISION.DEFAULT = precision;
}
