require('./app.css');
var React = require('react');

var PlainJsComponent = require('plain-js/plain-js');
var SomeJsx = require('some-jsx/some-jsx.jsx');

require('static/static');

var RenderExampleComponents = function () {
    var plain = new PlainJsComponent();
    plain.renderInto(document.getElementById('app__awesome'));

    React.render(
        React.createElement(SomeJsx, null),
        document.getElementById('app__some-jsx')
    );
};

document.addEventListener('DOMContentLoaded', RenderExampleComponents);