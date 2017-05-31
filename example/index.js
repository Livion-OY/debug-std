"use strict";

process.env.DEBUG = 'app:*';

const { err, out } = require('../index.js');

const debugError = err('app:error');
const debugInfo = out('app:info');

debugError('this is error');
debugInfo('this is info');