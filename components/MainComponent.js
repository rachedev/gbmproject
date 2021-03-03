import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import { CAKES } from "../shared/cakes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: CAKES,
    };
  }

  render() {
    return <Directory cakes={this.state.cakes} />;
  }
}

export default Main;
