"use strict";

const util = require("util");
const debug = require("debug");

function logOut() {
  return process.stdout.write(util.format.apply(util, arguments) + '\n');
}

function logErr() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

function debugErr(prefix) {
  let d = debug(prefix);
  d.log = logErr
  return d;
}

function debugOut(prefix) {
  let d = debug(prefix);
  d.log = logOut
  return d;
}

module.exports.err = debugErr
module.exports.out = debugOut
// deprecated
module.exports.debugErr = debugErr
module.exports.debugOut = debugOut