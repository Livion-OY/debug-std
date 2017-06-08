"use strict";

process.env.DEBUG = 'app:*';

const debugError = require('../index.js').err('app:error');
const debugInfo = require('../index.js').out('app:info');

debugError('this is error');
debugInfo('this is info');