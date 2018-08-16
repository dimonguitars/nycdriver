import React from 'react';
import { View, Text } from 'react-native';

const HandleError = ({error}) => {
  return (
    <View>
      <Text style={{color:'white', alignSelf: 'center', fontSize: 15, margin:7}}>{error}</Text>
    </View>
  );
};

export  { HandleError };
