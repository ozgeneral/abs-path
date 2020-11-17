const finder = require('find-package-json');
const path = require('path');
const f = finder(__dirname);
const MAX_ITERATIONS = 10;

done = false;
cnt = 0;
while(!done) {
    next = f.next();
    if (next.done) { break; }
    base_dir = path.dirname(next.filename);

    cnt++;
    if (cnt > MAX_ITERATIONS) {
        throw new Error(`Could not find the base_dir from ${__dirname} after ${MAX_ITERATIONS}`);
    }
}
module.exports = function(path) {
    return base_dir + path;
}