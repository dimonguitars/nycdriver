import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DashBoard extends Component {
  static onEnter = () => {
    Actions.refresh({
      title: 'DashBoard',
      rightTitle: 'sign out',
      onRight: () => {}
    });
  };
  render() {
    return (
      <View>
        <Text>DashBoard Component</Text>
      </View>
    );
  }
}

export default DashBoard;
