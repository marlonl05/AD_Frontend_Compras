export const stringNormalizer = str =>
	str
		.replace(/ /g, '_')
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
