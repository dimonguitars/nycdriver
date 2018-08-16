import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, ListItem, List } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class Settings extends Component {
  static onEnter = () => {
    Actions.refresh({
      title: 'Settings',
      //rightTitle: 'rightTitle',
      //onRight: () => {}
    });
  };
  settings(){
    const data = ['Update Plate Number', 'Credit Card', 'Paymnet History', 'Ticket History' ]
    data.forEach((item) =>{
      return <Text>{item.toString()}</Text>
    })
}
  render() {
    return (
      <View >
        <Card>
        {
          this.settings()
        }
      </Card>
      </View>
    );
  }
}

const styles ={
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
};
export default Settings;
