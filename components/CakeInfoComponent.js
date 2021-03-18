import React, { Component } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { CAKES } from "../shared/cakes";
import * as Animatable from "react-native-animatable";

function RenderCake({ cake }) {
  if (cake) {
    return (
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <Card featuredTitle={cake.name} image={require("./images/mlayer1.jpg")}>
          <Text style={{ margin: 10 }}>{cake.description}</Text>
        </Card>
      </Animatable.View>
    );
  }
  return <View />;
}

class CakeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: CAKES,
    };
  }

  static navigationOptions = {
    title: "Cake Information",
  };

  render() {
    const cakeId = this.props.navigation.getParam("cakeId");
    const cake = this.state.cakes.filter((cake) => cake.id === cakeId)[0];
    return <RenderCake cake={cake} />;
  }
}

export default CakeInfo;
