require('./app.css');
var React = require('react');

var PlainJsComponent = require('plain-js/plain-js');
var SomeJsx = require('some-jsx/some-jsx.jsx');

require('static/static');

var RenderExampleComponents = function () {
    var plain = new PlainJsComponent(document.getElementById('app__plain-js'));

    React.render(
        React.createElement(SomeJsx, null),
        document.getElementById('app__some-jsx')
    );
};

document.addEventListener('DOMContentLoaded', RenderExampleComponents);