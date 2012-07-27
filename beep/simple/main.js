var widget = require('../widget');

var w = widget('robots');
w.body('in SPACE!');
w.appendTo(document.body);

var v = widget('dinosaurs');
v.body('in the ground!');
v.appendTo(document.body);
