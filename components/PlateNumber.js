import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { storePlateNumber } from '../actions/plateNumberAction';

class PlateNumber extends Component {
  state = {
    input: ''
  }
  static onEnter = () => {
    Actions.refresh({
      rightTitle: 'next',
      onRight: () => {}
    });
  };

  handleInput(input){
    this.setState({ input: input })
  }
  onPlateNumberInput() {
    this.props.storePlateNumber(this.state.input)
  }

  render() {
    const { plateNumber } = this.props
    const { labelStyle, textInput, container, buttonStyle } = styles;
    return (
      <View style={container}>
        <Text style={labelStyle}>ENTER PLATE NUMBER</Text>
        <TextInput
          style={textInput}
          onChangeText={this.handleInput.bind(this)}
          placeholderTextColor="white"
          autoCorrect={false}
          autoCapitalize="characters"
        />
        <Button
          style={buttonStyle}
          onPress={this.onPlateNumberInput.bind(this)}
        >
          NEXT
        </Button>
      </View>
    );
  }
}
const styles = {
  container: {
    height: 20,
    alignItems: 'center',
    padding: 10,
    flex: 1
  },
  textInput: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    margin: 10,
    padding: 10,
    alignSelf: 'stretch'
  },
  labelStyle: {
    fontSize: 18,
    alignItems: 'center'
  },
  buttonStyle: {
    backgroundColor: '#998f8f',
    padding: 10,
    alignSelf: 'stretch',
    flexDirection: 'row'
  }
};
mapStatetoProps = ({ plate }) => {
  const { plateNumber } = plate;
  return { plateNumber };
};
export default connect(
  mapStatetoProps,
  { storePlateNumber }
)(PlateNumber);
