import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Contact Us",
  };

  render() {
    return (
      <ScrollView>
        <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
          <Text>1 Bakery Avenue</Text>
          <Text>Bgo</Text>
          <Text style={{ marginBottom: 10 }}>Philippines</Text>
          <Text>Phone: 123-456-7890</Text>
          <Text>Email: emailaddr@somewhere.co</Text>
        </Card>
      </ScrollView>
    );
  }
}

export default Contact;
