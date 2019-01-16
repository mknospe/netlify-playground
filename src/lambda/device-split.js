exports.handler = (event, context, callback) => {
	/*
	 * If mobile, redirect to mobile domain
	*/
	const isMobileHeader = 'CloudFront-Is-Mobile-Viewer';

	const request = event.Records[0].cf.request;
	const headers = request.headers;

	let response = event.Records[0].cf.response;
	if (headers[isMobileHeader.toLowerCase()] && headers[isMobileHeader.toLowerCase()] == 'true') {
		response = {
			status: '302',
			statusDescription: 'Found',
			headers: {
				location: [{
					key: 'Location',
					value: 'http://m.foobar.com',
				}],
			},
		};

		callback(null, response);
	}
};
