export function tan(theta) {
	if (typeof theta !== 'number') {
		throw new TypeError('"theta" is not a number');
	}

	return Math.tan(theta);
}
