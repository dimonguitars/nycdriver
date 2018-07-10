import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({ label, onPress, title }) => {
  const { button, buttonText } = styles;
  return (
    <View>
      <TouchableOpacity style={button} title={title} onPress={onPress}>
        <Text style={buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  button: {
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'blue',
    marginLeft: 5,
    marginRight: 5
  },
  buttonText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    padding: 10
  }
};
export { Button };
