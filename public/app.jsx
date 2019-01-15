var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class')
var Greeter = require('Greeter');

var firstName = 'Edgar'

ReactDOM.render(
  <Greeter name={firstName} message="Bienvenido a nuestro Blog"/>,
  document.getElementById('app')
)
