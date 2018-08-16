import React from 'react';
import { Icon } from 'react-native-elements'
import { TouchableHighlight, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

 const MenuIcon = () => {
  return (

      <TouchableHighlight onPress={() => Actions.settings()} underlayColor='#5650CE'>
      <Icon
        name='menu'
        color='white'
      />
      </TouchableHighlight>
  )

}

const styles = {
  container: {
      borderWidth: 0
  },
  homeButton: {
    justifyContent:'center',
    borderWidth: 0
  }
}

export { MenuIcon }
