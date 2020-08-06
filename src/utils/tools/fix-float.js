export function fixFloat(number, precision = 14) {
	return Math.round((number) * 10 ** precision) / 10 ** precision;
}
