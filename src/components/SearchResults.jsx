import React, { Component } from "react";
import User from "./User.jsx";

//This is  a statefull class component: rcc
export default class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") //its a promise, so we use then to receive the promise:
      //and we convert is to an object.
      .then((response) => response.json())
      //in the last then we store the data into the users array
      .then((data) =>
        this.setState({
          //data = Whatever you receive from the server, and then u save it in the state, with this.setState
          users: data,
        })
      );
    console.log("The SearchResult-component has mounted.");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.searchFor === this.props.searchFor &&
      nextState.users === this.state.users
    ) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    //My code;
    // const filtered = this.state.users.filter((user) => {
    //   if (user.name.toLowerCase().includes(this.props.searchFor)) {
    //     return user.name.toLowerCase().includes(this.props.searchFor);
    //   } else if (user.email.toLowerCase().includes(this.props.searchFor)) {
    //     return user.email.toLowerCase().includes(this.props.searchFor);
    //   }
    // });

    //Naqvi code:

    const filtered = this.state.users.filter(
      (user) =>
        user.name.toLowerCase().includes(this.props.searchFor.toLowerCase()) ||
        user.email.toLowerCase().includes(this.props.searchFor.toLowerCase())
    );
    // console.log(this.props.searchFor);
    //here we have to assign the state, so we can use the containing data:
    // const { users } = this.state;

    return (
      <table style={{padding: "20px"}}>
        <thead>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
        </thead>
        <tbody>
          {filtered.map((filtered) => (
            <User
              key={filtered.id}
              id={filtered.id}
              name={filtered.name}
              email={filtered.email}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
