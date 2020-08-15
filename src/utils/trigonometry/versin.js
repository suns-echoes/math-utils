export function versin(theta) {
	if (typeof theta !== 'number') {
		throw new TypeError('"theta" is not a number');
	}

	return 1 - Math.cos(theta);
}
