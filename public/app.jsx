var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class')

// var GreeterMessage = React.createClass({
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

// var GreeterForm = React.createClass({
var GreeterForm = createReactClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }

    // Mandamos en las propiedades de este componente el método que maneja el State del nombre del componente contenedor
    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Nombre"></input>
        <br/>
        <textarea cols="18" rows="5" ref="message" placeholder="Descripcion"></textarea>
        <br/>
        <button>Set Change</button>
      </form>
    )
  }
});

// var Greeter = React.createClass({
var Greeter = createReactClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is my first component'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function (updates) {
    this.setState(updates)
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName = 'Edgar'

ReactDOM.render(
  <Greeter name={firstName} message="Bienvenido a nuestro Blog"/>,
  document.getElementById('app')
)
