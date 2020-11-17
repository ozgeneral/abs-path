var finder = require('find-package-json');
var f = finder(__dirname);
global.base_dir = require('path').dirname(f.next().filename)

module.exports = function(path) {
    return base_dir + path;
}