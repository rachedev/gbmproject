import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Picker,
  Switch,
  Button,
  Modal,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Animatable from 'react-native-animatable';
import * as Notifications from 'expo-notifications';

class Quotation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cakeType: 'Character Cake with Fondant Icing',
      pickUp: false,
      date: new Date(),
      showCalendar: false,
      showModal: false,
    };
  }

  static navigationOptions = {
    title: 'Request for Price Quotation',
  };

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  handleQuotation() {
    console.log(JSON.stringify(this.state));
    this.toggleModal();
    Alert.alert(
      'Submit Request?',
      `Type of Cake: ${this.state.cakeType}
      \nPick-up? ${this.state.pickUp}
      \nDate of Pick-up/Delivery: ${this.state.date}`,
      [
        {
          text: 'Cancel',
          onPress: () => this.resetForm(),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            this.presentLocalNotification(
              this.state.date.toLocaleDateString('en-US')
            );
            this.resetForm();
          },
        },
      ],
      { cancelable: false }
    );
  }

  resetForm() {
    this.setState({
      cakeType: 'Character Cake with Fondant Icing',
      pickUp: false,
      date: new Date(),
      showCalendar: false,
      showModal: false,
    });
  }

  async presentLocalNotification(date) {
    function sendNotification() {
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
        }),
      });

      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Your Price Quotation Request',
          body: `Request for ${date} pick-up/delivery`,
        },
        trigger: null,
      });
    }

    let permissions = await Notifications.getPermissionsAsync();
    if (!permissions.granted) {
      permissions = await Notifications.requestPermissionsAsync();
    }
    if (permissions.granted) {
      sendNotification();
    }
  }

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="zoomIn" duration={2000} delay={1000}>
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
                label="Character Cake with Fondant Icing"
                value="Character Cake with Fondant Icing"
              />
              <Picker.Item
                label="Character Cake with Buttercream Icing"
                value="Character Cake with Buttercream Icing"
              />
              <Picker.Item
                label="Theme Cake with Fondant Icing"
                value="Theme Cake with Fondant Icing"
              />
              <Picker.Item
                label="Theme Cake with Buttercream Icing"
                value="Theme Cake with Buttercream Icing"
              />
            </Picker>
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Pick-up?</Text>
            <Switch
              style={styles.formItem}
              value={this.state.pickUp}
              trackColor={{ true: '#73c2fb', false: null }}
              onValueChange={(value) => this.setState({ pickUp: value })}
            />
          </View>
          <View style={styles.formRow}>
            <Text style={styles.formLabel}>Date of Pick-up/Delivery</Text>
            <Button
              onPress={() =>
                this.setState({ showCalendar: !this.state.showCalendar })
              }
              title={this.state.date.toLocaleDateString('en-US')}
              color="#73c2fb"
              accessibilityLabel="Tap me to select a pick-up/delivery date"
            />
          </View>
          {this.state.showCalendar && (
            <DateTimePicker
              value={this.state.date}
              mode={'date'}
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
              color="#73c2fb"
              accessibilityLabel="Tap me to request for order quotation"
            />
          </View>
          {/* <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.showModal}
            onRequestClose={() => this.toggleModal()}
          >
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>
                Request for Custom Cake Price Quotation
              </Text>
              <Text style={styles.modalText}>
                Type of Cake: {this.state.cakeType}
              </Text>
              <Text style={styles.modalText}>
                Pick-up? : {this.state.pickUp ? "Yes" : "No"}
              </Text>
              <Text style={styles.modalText}>
                Date: {this.state.date.toLocaleDateString("en-US")}
              </Text>
              <Button
                onPress={() => {
                  this.toggleModal();
                  this.resetForm();
                }}
                color="#73c2fb"
                title="Close"
              />
            </View>
          </Modal> */}
        </Animatable.View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 20,
  },
  formLabel: {
    fontSize: 18,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
  modal: {
    //alignItems: "center",
    justifyContent: 'center',
    margin: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#ffff00',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    margin: 10,
    color: '#000',
  },
});

export default Quotation;
