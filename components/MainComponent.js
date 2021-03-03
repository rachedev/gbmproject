import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import CakeInfo from "./CakeInfoComponent";
import { View } from "react-native";
import { CAKES } from "../shared/cakes";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: CAKES,
      selectedCake: null,
    };
  }

  onCakeSelect(cakeId) {
    this.setState({ selectedCake: cakeId });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Directory
          cakes={this.state.cakes}
          onPress={(cakeId) => this.onCakeSelect(cakeId)}
        />
        <CakeInfo
          cake={
            this.state.cakes.filter(
              (cake) => cake.id === this.state.selectedCake
            )[0]
          }
        />
      </View>
    );
  }
}

export default Main;
