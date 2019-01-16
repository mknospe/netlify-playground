exports.handler = (event, context, callback) => {
	console.log(request);
	console.log(context);

	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			message: `Hello world ${Math.floor(Math.random() * 10)}`
		})
	});
};
