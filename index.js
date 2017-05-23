"use strict";

const util = require("util");
const debug = require("debug");

function logOut() {
  return process.stdout.write(util.format.apply(util, arguments) + '\n');
}

function logErr() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

module.exports.debugErr = function(prefix) {
  let d = debug(prefix);
  d.log = logErr
  return d;
}

module.exports.debugOut = function(prefix) {
  let d = debug(prefix);
  d.log = logOut
  return d;
}