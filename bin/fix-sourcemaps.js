#!/usr/bin/env node

var minimist = require('minimist'),
    fix = require('..');

var argv = minimist(process.argv.slice(2));

fix(argv.sourcemap, argv.file);
