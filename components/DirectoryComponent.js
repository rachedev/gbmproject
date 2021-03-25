import React, { Component } from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAKES } from '../shared/cakes';
import * as Animatable from 'react-native-animatable';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: CAKES,
    };
  }

  static navigationOptions = {
    title: 'Cake Varieties',
  };

  render() {
    const { navigate } = this.props.navigation;
    const renderDirectoryItem = ({ item }) => {
      return (
        <Animatable.View animation="fadeInRightBig" duration={2000}>
          {/* <ListItem
            title={item.name}
            subtitle={item.description}
            onPress={() => navigate("CakeInfo", { cakeId: item.id })}
            leftAvatar={{ source: item.image }}
          /> */}
          <TouchableOpacity
            onPress={() => navigate('CakeInfo', { cakeId: item.id })}
          >
            <View
              style={{
                flexDirection: 'row',
                height: 100,
                width: '90%',
                padding: 20,
                alignItems: 'flex-start',
                //backgroundColor: 'lightsalmon',
              }}
            >
              <Image
                source={item.image}
                style={{ height: 70, width: 70, borderRadius: 25 }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  paddingLeft: 20,
                  //backgroundColor: 'lightblue',
                }}
              >
                <Text
                  style={{ paddingBottom: 5, fontSize: 18, fontWeight: '700' }}
                >
                  {item.name}
                </Text>
                <Text style={{ fontSize: 14, paddingRight: 25 }}>
                  {item.description}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </Animatable.View>
      );
    };

    return (
      <FlatList
        data={this.state.cakes}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  }
}

export default Directory;
