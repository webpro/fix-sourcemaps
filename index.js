var fs = require('fs'),
    path = require('path');

module.exports = function(sourceMapPath, file) {

    var contents = fs.readFileSync(path.resolve(sourceMapPath)),
        map = JSON.parse(contents);

    map.file = file || map.file;

    map.sources = map.sources.map(function(source) {
        return path.relative(path.dirname(sourceMapPath), source);
    });

    fs.writeFileSync(sourceMapPath, JSON.stringify(map));

};

