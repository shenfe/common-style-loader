const camelize = require('camelize');

module.exports = name => camelize(`module-${name}`);
