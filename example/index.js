"use strict";

process.env.DEBUG = 'app:*';

const { debugErr, debugOut } = require('../index.js');

const debugError = debugErr('app:error');
const debugInfo = debugOut('app:info');

debugError('this is error');
debugInfo('this is info');