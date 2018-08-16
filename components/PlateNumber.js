import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import {
  FormLabel,
  FormInput,
  Card,
  FormValidationMessage
} from 'react-native-elements';
import { Btn } from './Common/Button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  storePlateNumber,
  enterPlateNumber
} from '../actions/plateNumberAction';
import { HandleError } from './Common/handleError';

class PlateNumber extends Component {
  static onEnter = () => {
    Actions.refresh({
      rightTitle: 'next',
      leftTitle: 'back',
      onRight: () => Actions.dashboard()
    });
  };

  handleInput(input) {
    this.props.enterPlateNumber(input);
  }

  handleButtonPress() {
    this.props.storePlateNumber(this.props.enterPlate);
  }
  validateInput() {
    if (this.props.enterPlate.length <= 3) {
      return (
        <Btn
          title="NEXT"
          // buttonStyle={styles.button}
          backgroundColor="#8faae0"
          color="black"
          disable={true}
          borderRadius={5}
          disabledTextStyle={{ color: 'red' }}
          onPress={() => this.handleError()}
        />
      );
    } else {
      return (
        <Btn
          borderRadius={5}
          title="NEXT"
          color="white"
          backgroundColor='#5654CE'
          loading={this.props.isLoading}
          loadingRight
          onPress={() => this.handleButtonPress()}
        />
      );
    }
  }

  handleError() {
    const { enterPlate } = this.props;
    if(enterPlate.length > 0 && enterPlate.length < 3)
    return <Text>Plate number is too short</Text>;
  }

  render() {
    const { plateNumber } = this.props;
    const { labelStyle, textInput, container, buttonStyle } = styles;
    return (
      <View style={container}>
        <FormLabel>Enter Your Plate Number </FormLabel>
        <FormInput
          onChangeText={this.handleInput.bind(this)}
          autoFocus
          autoCorrect={false}
          autoCapitalize="characters"
        />
        <FormValidationMessage>{this.handleError()}</FormValidationMessage>
        {this.validateInput()}
      </View>
    );
  }
}
const styles = {
  container: {
    padding: 10,
    marginTop: 25
  },
  disabled: {
    // grey from designmodo.github.io/Flat-UI/
    backgroundColor: '#D1D5D8'
  }
  // button: {
  //   color: 'red'
  // },
  // textInput: {
  //   color: 'black',
  //   borderColor: 'black',
  //   fontSize: 16,
  //   margin: 8,
  //   padding: 10,
  //   alignSelf: 'stretch'
  // },
  // labelStyle: {
  //   fontSize: 18,
  //   color: 'black',
  //   alignItems: 'center',
  //   margin: 15
  // }
};
mapStatetoProps = ({ plate }) => {
  const { plateNumber, error, isLoading, enterPlate } = plate;
  return { plateNumber, error, isLoading, enterPlate };
};
export default connect(
  mapStatetoProps,
  { storePlateNumber, enterPlateNumber }
)(PlateNumber);
