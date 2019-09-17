import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const result = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5"
    );
    const data = await result.json();
    this.setState({
      users: data.users
    });
    console.log(data.users);
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
