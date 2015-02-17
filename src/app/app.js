
require('./app.scss');
var Awesome = require('awesome/awesome');

document.addEventListener('DOMContentLoaded', function () {
    var awesome = new Awesome();

    awesome.renderInto(document.querySelector('.app__awesome'));
});