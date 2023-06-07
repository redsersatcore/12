// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.1
// This file is automatically generated by `tools/node_compat/setup.ts`. Do not modify this file manually.

'use strict';
require('../common');
const assert = require('assert');
const { channel, hasSubscribers } = require('diagnostics_channel');

const dc = channel('test');
assert.ok(!hasSubscribers('test'));

dc.subscribe(() => {});
assert.ok(hasSubscribers('test'));
