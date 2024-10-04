import React, { Component } from 'react';
import SecondComponent from './SecondComponent';

class FirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lname: '',
      submittedName: '',
      submittedLname: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    this.setState({
      submittedName: this.state.name,
      submittedLname: this.state.lname
    });
  };

  render() {
    return (
      <div>
        <h2>First Component</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter first name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lname"
          placeholder="Enter last name"
          value={this.state.lname}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>

        <SecondComponent name={this.state.submittedName} lname={this.state.submittedLname} />
      </div>
    );
  }
}

export default FirstComponent;
