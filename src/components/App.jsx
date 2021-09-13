import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      userInput: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          userData: data,
        });
      });
  }
  render() {
    return (
      <div className='container mt-6'>
        <input
          type="text"
          name="inputText"
          onChange={this.handleChange}
          value={this.state.userInput}
        />
        {this.state.userData
          .filter((user) => {
            return user.name.includes(this.state.userInput);
          })
          .map((user) => {
            return <div>{user.name}</div>;
          })}
      </div>
    );
  }
}

export default App;
