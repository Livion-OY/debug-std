# debug-std
Tiny wrapper for npm [debug](https://www.npmjs.com/package/debug) module, that makes writing to **stdout** and **stderr** simpler.
We are using it in Kubernetes. It should be useful with systemctl also.

## Usage

Very similar to [debug](https://www.npmjs.com/package/debug)

Differences:
* Instead if single debug function, it is separated to err and out functions. Err writes output to stderr and out writes to stdout.
* Doesn't use timestamps as prefixes, since they are added automatically.

## Example:

```
process.env.DEBUG = 'app:*';

const debugError = require('debug-std').err('app:error');
const debugInfo = require('debug-std').out('app:info');

debugError('this is error');
debugInfo('this is info');
```
Test by running

```
node app.js 2> err.log 1> out.log
```
