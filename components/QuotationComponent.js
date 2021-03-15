import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Picker,
  Switch,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

class Quotation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cakeType: 1,
      pickUp: false,
      date: new Date(),
      showCalendar: false,
    };
  }

  static navigationOptions = {
    title: "Request for Price Quotation",
  };

  handleQuotation() {
    console.log(JSON.stringify(this.state));
    this.setState({
      cakeType: 1,
      pickUp: false,
      date: new Date(),
      showCalendar: false,
    });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Type of Customized Cake</Text>
          <Picker
            style={styles.formItem}
            selectedValue={this.state.cakeType}
            onValueChange={(itemValue) =>
              this.setState({ cakeType: itemValue })
            }
          >
            <Picker.Item
              label="1 - Character Cake with Fondant Icing"
              value="1"
            />
            <Picker.Item
              label="2 - Character Cake with Buttercream Icing"
              value="2"
            />
            <Picker.Item label="3 - Theme Cake with Fondant Icing" value="3" />
            <Picker.Item
              label="4 - Theme Cake with Buttercream Icing"
              value="4"
            />
          </Picker>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Pick-up?</Text>
          <Switch
            style={styles.formItem}
            value={this.state.pickUp}
            trackColor={{ true: "#5637DD", false: null }}
            onValueChange={(value) => this.setState({ pickUp: value })}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date of Pick-up/Delivery</Text>
          <Button
            onPress={() =>
              this.setState({ showCalendar: !this.state.showCalendar })
            }
            title={this.state.date.toLocaleDateString("en-US")}
            color="#5637DD"
            accessibilityLabel="Tap me to select a pick-up/delivery date"
          />
        </View>
        {this.state.showCalendar && (
          <DateTimePicker
            value={this.state.date}
            mode={"date"}
            display="default"
            onChange={(event, selectedDate) => {
              selectedDate &&
                this.setState({ date: selectedDate, showCalendar: false });
            }}
            style={styles.formItem}
          />
        )}
        <View style={styles.formRow}>
          <Button
            onPress={() => this.handleQuotation()}
            title="Request Quote"
            color="#5637DD"
            accessibilityLabel="Tap me to request for order quotation"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
});

export default Quotation;
