const http = require('http');

module.exports = {
	test: function(arg) {
		if (arg) console.log(`ran test with ${arg}`);
		else console.log('ran test without arg');
	},
	setTemp(targetTemp) {
		//post to set temp
	},
	raiseTemp(increase) {
		//get temp
		//add increase
		//set temp
	},
	options(method, ip ) {
	}
};