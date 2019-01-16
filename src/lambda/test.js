exports.handler = (event, context, callback) => {
	console.log(event);
	console.log(context);

	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			message: `Hello world ${Math.floor(Math.random() * 10)}`
		})
	});
};
