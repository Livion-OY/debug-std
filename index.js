"use strict";

var util = require("util");
var debug = require("debug");

function logOut() {
  return process.stdout.write(util.format.apply(util, arguments) + '\n');
}

function logErr() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\u001b[3' + c + 'm+' + debug.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = name + ' ' + args[0];
  }
}

// override formatArgs that does not use timestamp prefixes
debug.formatArgs = formatArgs;

function debugErr(prefix) {
  var d = debug(prefix);
  d.log = logErr
  return d;
}

function debugOut(prefix) {
  var d = debug(prefix);
  d.log = logOut
  return d;
}

module.exports.err = debugErr
module.exports.out = debugOut
// deprecated
module.exports.debugErr = debugErr
module.exports.debugOut = debugOut