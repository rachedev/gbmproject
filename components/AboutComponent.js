import React, { Component } from "react";
import { ScrollView, Text, FlatList } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { SERVICES } from "../shared/services";

function Standard() {
  return (
    <Card title="Our Quality Promise">
      <Text>
        We offer you, our customers, a partnership. We work with you to plan out
        your dream party baked goodies - from cakes to cookies to bars to
        breads. Our quality ingredients coupled with our artistic rendering of
        your envisioned custom cakes and treats would certainly be the highlight
        of your party table.
      </Text>
    </Card>
  );
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: SERVICES,
    };
  }

  static navigationOptions = {
    title: "About Us",
  };

  render() {
    const renderService = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: require("./images/custom.jpg") }}
        />
      );
    };

    return (
      <ScrollView>
        <Standard />
        <Card title="What We Offer">
          <FlatList
            data={this.state.services}
            renderItem={renderService}
            keyExtractor={(item) => item.id.toString()}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default About;
