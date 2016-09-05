'use strict';

const convict = require('convict');

let conf = convict({
	port: {
		doc: 'Port to listen on',
		format: 'port',
		default: 9090
	}
});

conf.validate({strict: true});

module.exports = conf;
