/**
 * Origin of the coordinate system.
 * @const {object} - O(0,0)
 */
export const ORIGIN_0x0 = {
	get x() {
		return 0;
	},
	get y() {
		return 0;
	},
};


const _FIX_FLOAT_MAX_PRECISION = 14;
let _FIX_FLOAT_PRECISION = _FIX_FLOAT_MAX_PRECISION;

/**
 * Get default and maximum precision of fixFloat method.
 * @prop PRECISION
 * @return {object} - configuration object.
 *//**
 * Set precision for fixFloat method.
 * @prop PRECISION
 * @param {number} precision - decimal places, integer <0,_FIX_FLOAT_MAX_PRECISION>
 * @return {void}
 */
export const FIX_FLOAT = {
	get PRECISION() {
		return {
			DEFAULT: _FIX_FLOAT_PRECISION,
			MAXIMUM: _FIX_FLOAT_MAX_PRECISION,
		};
	},
	set PRECISION(precision = _FIX_FLOAT_MAX_PRECISION) {
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

		_FIX_FLOAT_PRECISION = precision;
	},
};
