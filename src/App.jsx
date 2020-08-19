import React, { Component } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import About from "./components/About";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", searchFor: "", currentPage: "search" };
  }

  handleSubmit = (event) => {
    this.setState({ searchFor: this.state.searchTerm });
    event.preventDefault();
  };

  // we can use this way: 
  // switchPageSearch = () => {
  //   this.setState({
  //     currentPage: "search",
  //   });
  // };

  // switchPageAbout = () => {
  //   this.setState({
  //     currentPage: "about",
  //   });
  // };

  switchPage = (page) => {
    this.setState({
      currentPage: page,
    });
  };
  //In  a class component you always need a render method.
  render() {
    const searchFor = this.state.searchFor;
    if (this.state.currentPage === "search") {
      return (
        <div className="App">
          <Header switchPage={this.switchPage} />
          <form style={{padding: "20px"}} onSubmit={this.handleSubmit}>
            <input
              style={{marginRight: "10px", padding: "10px"}}
              placeholder="Search for..."
              type="text"
              name="search"
              value={this.state.searchTerm}
              onChange={(e) =>
                this.setState({ searchTerm: e.target.value })
              }
            />
            <button style={{marginRight: "20px", marginTop: "10px", padding: "10px", border: "none", background: "black", color: "white", fontWeight: "bold"}}type="submit">Search</button>
          </form>
          <SearchResults searchFor={searchFor} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header switchPage={this.switchPage} />
          <About />
        </div>
      );
    }
  }
}
