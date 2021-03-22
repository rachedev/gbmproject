import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Tile } from 'react-native-elements';
import { Card, ListItem } from 'react-native-elements';
import { CAKES } from '../shared/cakes';
import * as Animatable from 'react-native-animatable';
import { ScrollView } from 'react-native-gesture-handler';

function RenderCake({ cake }) {
  if (cake) {
    return (
      <>
        <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
          <View style={{ margin: 20 }}>
            <Text>{cake.name}</Text>
            <Image
              source={cake.image}
              style={{ height: 350, width: 375, borderRadius: 20 }}
            />
            <Text style={{ margin: 10 }}>{cake.description}</Text>
          </View>
          {/* <Card featuredTitle={cake.name} image={cake.image}>
            <Text style={{ margin: 10 }}>{cake.description}</Text>
          </Card> */}
        </Animatable.View>
        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>
          {/* <Card featuredTitle={cake.name} image={cake.image}>
            <Text style={{ margin: 10 }}>{cake.description}</Text>
          </Card> */}
          <View style={{ margin: 20 }}>
            <Image
              source={cake.image2}
              style={{ height: 350, width: 375, borderRadius: 20 }}
            />
            <Image
              source={cake.image3}
              style={{ height: 350, width: 375, borderRadius: 20 }}
            />
            {/* <Card image={cake.image2} />
          <Card image={cake.image3} /> */}
          </View>
        </Animatable.View>
      </>
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
