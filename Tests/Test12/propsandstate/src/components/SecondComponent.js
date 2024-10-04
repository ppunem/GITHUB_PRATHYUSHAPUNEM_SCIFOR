import React, { Component } from 'react';

class SecondComponent extends Component {
  render() {
    return (
      <div>
        <h2>Second Component</h2>
        <p>Name: {this.props.name}</p>
        <p>Last Name: {this.props.lname}</p>
      </div>
    );
  }
}

export default SecondComponent;
