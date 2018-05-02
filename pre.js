#!/usr/bin/env node

const fs = require('fs');

const { name } = require('./src/config.json');

const moduleName = require('./name')(name);

fs.writeFileSync(
    './style.wrapped.scss',
    `#${moduleName} {${fs.readFileSync('./src/style.scss', 'utf8')}}`,
    'utf8'
);