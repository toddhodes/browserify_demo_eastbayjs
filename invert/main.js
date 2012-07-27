var shoe = require('shoe');
var es = require('event-stream');
var $ = require('jquery-browserify');

var stream = shoe('/invert');
var s = es.mapSync(function (msg) {
    $('#result').append(msg);
    return String(Number(msg)^1);
});
s.pipe(stream).pipe(s);
