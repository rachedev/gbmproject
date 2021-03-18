import React, { Component } from "react";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { CAKES } from "../shared/cakes";
import * as Animatable from "react-native-animatable";

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: CAKES,
    };
  }

  static navigationOptions = {
    title: "Cake Varieties",
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <Animatable.View animation="fadeInRightBig" duration={2000}>
          <ListItem
            title={item.name}
            subtitle={item.description}
            onPress={() => navigate("CakeInfo", { cakeId: item.id })}
            leftAvatar={{ source: require("./images/mlayer1.jpg") }}
          />
        </Animatable.View>
      );
    };

    return (
      <FlatList
        data={this.state.cakes}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Directory;
