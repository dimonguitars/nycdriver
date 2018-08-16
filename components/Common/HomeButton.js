import React from 'react';
import { Icon } from 'react-native-elements'
import { TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

 const HomeButton = () => {
  return (

      <TouchableHighlight onPress={() => Actions.tabs()} underlayColor='#5650CE'>
      <Icon

        name='home'
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

export { HomeButton }
