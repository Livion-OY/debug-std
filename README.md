# debug-std
Tiny helper to npm debug module, that makes writing to **stdout** and **stderr** simpler.

## Usage

Very similar to [debug](https://www.npmjs.com/package/debug)

Instead if single debug function, it is separated to debugErr and debugOut functions. DebugErr writes output to stderr and debugOut writes to stdout.

Example:

```
const { debugErr, debugOut } = require('debug-std');

const debugError = debugErr('app:error');
const debugInfo = debugOut('app:info');

debugError('this is error');
debugInfo('this is info');
```
Test it by running

```
node app.js 2> err.log 1> out.log
```
