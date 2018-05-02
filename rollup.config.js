const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const ejs = require('rollup-plugin-ejs');
const json = require('rollup-plugin-json');
const scss = require('rollup-plugin-scss');
const buble = require('rollup-plugin-buble');

const fs = require('fs');
const path = require('path');

const camelize = require('camelize');

const moduleConfig = require('./src/config');

const moduleName = (() => camelize(`module-${moduleConfig.name}`))();

module.exports = {
    input: 'index.js',
    name: moduleName,
    output: {
        file: `dist/${moduleName}.js`,
        format: 'umd'
    },
    plugins: [
        buble(),

        json(),

        resolve({
            jsnext: true,
            main: true
        }),

        commonjs({
            include: 'node_modules/**'
        }),

        ejs()
    ]
};
