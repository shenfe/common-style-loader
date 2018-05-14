const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const ejs = require('rollup-plugin-ejs');
const json = require('rollup-plugin-json');
const sass = require('rollup-plugin-sass');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const replace = require('rollup-plugin-replace');

const moduleConfig = require('./src/config');

const moduleName = require('./name')(moduleConfig.name);

require('./pre');

module.exports = {
    input: 'index.js',
    output: {
        file: `dist/${moduleName}.js`,
        name: moduleName,
        format: 'umd'
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        json(),

        sass({
            insert: true
        }),

        resolve({
            jsnext: true,
            main: true
        }),

        commonjs({
            include: ['node_modules/**', 'name.js']
        }),

        ejs(),

        babel(),

        uglify({
            ie8: true
        })
    ]
};
