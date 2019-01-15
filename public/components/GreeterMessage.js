var React = require('react');
var createReactClass = require('create-react-class');

var GreeterMessage = createReactClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    )
  }
});

module.exports = GreeterMessage;
