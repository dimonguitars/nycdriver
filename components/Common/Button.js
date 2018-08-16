import React from 'react';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const Btn = ({ backgroundColor, onPress, title, color, loadingRight, loading }) => {
  return (
    <Button
      style={{ margin:5}}
      color={color}
      containerViewStyle={{alignSelf:'stretch'}}
      backgroundColor={backgroundColor}
      borderRadius={5}
      title={title}
      fontSize={12}
      Component={TouchableOpacity}
      fontWeight='500'
      onPress={onPress}
      loadingRight={loadingRight}
      loading={loading}
    />

  );
};
export { Btn };
