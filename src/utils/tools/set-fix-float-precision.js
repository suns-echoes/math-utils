import { FIX_FLOAT } from '../constants.js';


/**
 * Method sets precision for fixFloat method.
 * @method setFixFloatPrecision
 * @param {number} [precision] - decimal places, integer <0,FIX_FLOAT.PRECISION.MAXIMUM>
 * @return {void}
 */
export function setFixFloatPrecision(precision = FIX_FLOAT.PRECISION.MAXIMUM) {
	FIX_FLOAT.PRECISION = precision;
}
