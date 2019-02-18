import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
<<<<<<< HEAD
        <input type="checkbox" checked={ this.props.isCompleted } />
        <span>{ this.props.description }</span>
=======
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
        <input type="button" value="delete" onClick={ this.props.deleteTodo }/>
>>>>>>> checkpoint-8-events
      </li>
    );
  }
}

export default ToDo;
