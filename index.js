'use strict';
module.exports = function () {
	// TODO: Use rest parameter when targeting Node.js 6
	return Array.from(arguments).reduce((obj, x) => {
		const o = Object(x);

		for (const key of Object.keys(o)) {
			obj[key] = obj[key] || [];
			obj[key].push(o[key]);
		}

		return obj;
	}, {});
};
