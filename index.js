'use strict';

module.exports = function () {
	var src;
	var obj = {};

	for (var s = 0; s < arguments.length; s++) {
		src = Object(arguments[s]);

		for (var key in src) {
			if (Object.prototype.hasOwnProperty.call(src, key)) {
				obj[key] = obj[key] || [];
				obj[key].push(src[key]);
			}
		}
	}

	return obj;
};
