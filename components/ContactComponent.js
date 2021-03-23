import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { ImageStore } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Contact Us',
  };

  sendMail() {
    MailComposer.composeAsync({
      recipients: ['emailaddr@somewhere.co'],
      subject: 'Inquiry',
      body: 'Hello. I would like to inquire about: ',
    });
  }

  render() {
    return (
      <ScrollView>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <Card title="Contact Information" wrapperStyle={{ margin: 20 }}>
            <Text>1 Bakery Avenue</Text>
            <Text>Bgo</Text>
            <Text style={{ marginBottom: 10 }}>Philippines</Text>
            <Text>Phone: 123-456-7890</Text>
            <Text>Email: emailaddr@somewhere.co</Text>
            <Button
              title="Send email"
              buttonStyle={{ backgroundColor: '#73c2fb', margin: 40 }}
              icon={
                <Icon
                  name="envelope-o"
                  type="font-awesome"
                  color="#fff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              onPress={() => this.sendMail()}
            />
          </Card>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
          <View style={{ marginHorizontal: 40, marginTop: 20 }}>
            <Image source={require('../assets/images/logo.jpg')} />
          </View>
        </Animatable.View>
      </ScrollView>
    );
  }
}

export default Contact;
