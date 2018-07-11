import React from 'react';
import { View, Text } from 'react-native';

const HandleError = ({error}) => {
  const { errorStyle } = styles;
  return (
    <View>
      <Text style={errorStyle}>{error}</Text>
    </View>
  );
};

styles = {
  errorStyle: {
    fontSize: 15,
    alignSelf: 'center',
    color: '#d6c0c0',
    fontWeight: "500"

  }
};

export  { HandleError };
