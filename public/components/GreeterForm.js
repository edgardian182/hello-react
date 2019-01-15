var React = require('react');
var createReactClass = require('create-react-class');

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

module.exports = GreeterForm;
