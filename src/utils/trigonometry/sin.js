export function sin(theta) {
	if (typeof theta !== 'number') {
		throw new TypeError('"theta" is not a number');
	}

	return Math.sin(theta);
}
