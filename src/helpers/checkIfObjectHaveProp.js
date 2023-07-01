export const checkIfObjectHaveProp = (object, prop) => {
	if (!object) return;

	if (!prop) return object;

	return Object.prototype.hasOwnProperty.call(object, prop) ? object[prop] : object;
};
