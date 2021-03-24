import React, { Component } from 'react';
import { View, Text, Animated, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { CAKES } from '../shared/cakes';
import { PROMOTIONS } from '../shared/promotions';
import { SERVICES } from '../shared/services';

function RenderItem({ item }) {
  if (item) {
    return (
      <View
        style={{ padding: 20, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text style={{ margin: 20, fontSize: 24 }}>{item.name}</Text>
        <Image
          source={item.image}
          style={{ height: 350, width: 375, borderRadius: 20 }}
        />
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </View>
      // <Card featuredTitle={item.name} image={item.image}>
      //   <Text style={{ margin: 10 }}>{item.description}</Text>
      // </Card>
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
      scaleValue: new Animated.Value(0),
    };
  }

  animate() {
    Animated.timing(this.state.scaleValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }

  componentDidMount() {
    this.animate();
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <Animated.ScrollView
        style={{ transform: [{ scale: this.state.scaleValue }] }}
        stickyHeaderIndices={[0]}
      >
        <Text>Gingerbread Man Bakery</Text>
        <RenderItem item={this.state.promotions[0]} />
        <RenderItem item={this.state.promotions[1]} />
        <RenderItem item={this.state.promotions[2]} />
        <RenderItem item={this.state.promotions[3]} />
      </Animated.ScrollView>
    );
  }
}

export default Home;
