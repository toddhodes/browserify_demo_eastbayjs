var foo = require('./foo');
var $ = require('jquery-browserify');

$('pre').text(foo(5));
