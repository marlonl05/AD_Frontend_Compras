export const fetchMock = (time = 2000, message = 'Fetch has been completed!') =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(message);
		}, time);
	});
