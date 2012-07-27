var JSONStream = require('JSONStream');
var parser = JSONStream.parse(['data',true,'17']);

var createGraph = require('graph-stream');
var graph = createGraph(800, 600);
graph.appendTo(document.body);
parser.pipe(graph);

var request = require('request');
request('http://localhost:9008/data.json').pipe(parser);
