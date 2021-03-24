import React, { Component } from 'react';
import { Text, View, Image, Share, ScrollView } from 'react-native';
import { Tile } from 'react-native-elements';
import { Card, ListItem, Icon } from 'react-native-elements';
import { CAKES } from '../shared/cakes';
import * as Animatable from 'react-native-animatable';
//import { ScrollView } from 'react-native-gesture-handler';

function RenderCake({ cake }) {
  const shareCake = (title, message, url) => {
    Share.share(
      {
        title: title,
        message: `${title}: ${message} ${url}`,
        url: url,
      },
      {
        dialogTitle: 'Share ' + title,
      }
    );
  };

  if (cake) {
    return (
      <ScrollView>
        {/* <Animatable.View animation="fadeInDown" duration={2000} delay={1000}> */}
        <View style={{ margin: 20 }}>
          <Text>{cake.name}</Text>
          <Text style={{ margin: 10 }}>{cake.description}</Text>
          <Image source={cake.image} style={{ height: 400, width: 375 }} />
          <Icon
            name={'share'}
            type="font-awesome"
            color="#73c2fb"
            raised
            reverse
            onPress={() => shareCake(cake.name, cake.description, cake.image)}
          />
        </View>
        {/* <Card featuredTitle={cake.name} image={cake.image}>
            <Text style={{ margin: 10 }}>{cake.description}</Text>
          </Card> */}
        {/*</Animatable.View> */}
        {/*<Animatable.View animation="fadeInUp" duration={2000} delay={1000}>*/}
        {/* <Card featuredTitle={cake.name} image={cake.image}>
            <Text style={{ margin: 10 }}>{cake.description}</Text>
          </Card> */}
        <View style={{ margin: 20 }}>
          <Image source={cake.image2} style={{ height: 400, width: 375 }} />
          <Image source={cake.image3} style={{ height: 350, width: 375 }} />
          {/* <Card image={cake.image2} />
          <Card image={cake.image3} /> */}
        </View>
        {/*</Animatable.View> */}
      </ScrollView>
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
    title: 'Cake Information',
  };

  render() {
    const cakeId = this.props.navigation.getParam('cakeId');
    const cake = this.state.cakes.filter((cake) => cake.id === cakeId)[0];
    return <RenderCake cake={cake} />;
  }
}

export default CakeInfo;
