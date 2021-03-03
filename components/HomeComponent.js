import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { CAKES } from "../shared/cakes";
import { PROMOTIONS } from "../shared/promotions";
import { SERVICES } from "../shared/services";

function RenderItem({ item }) {
  if (item) {
    return (
      <Card featuredTitle={item.name} image={require("./images/mlayer1.jpg")}>
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  }
  return <View />;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: CAKES,
      promotions: PROMOTIONS,
      services: SERVICES,
    };
  }

  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <ScrollView>
        <RenderItem item={this.state.promotions[0]} />
        <RenderItem item={this.state.promotions[1]} />
        <RenderItem item={this.state.promotions[2]} />
        <RenderItem item={this.state.promotions[3]} />
      </ScrollView>
    );
  }
}

export default Home;
