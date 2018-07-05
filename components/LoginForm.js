import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  loginUserFailed
} from '../actions/authActions';

class Login extends Component {
  onEmailInput(email) {
    this.props.emailChanged(email);
  }

  onPasswordInput(pass) {
    this.props.passwordChanged(pass);
  }

  renderLogginButton() {
    const { button, buttonText, textInput, container } = styles;
    if (this.props.loading)
      return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    return (
      <TouchableOpacity
        style={button}
        title="Login"
        onPress={this.loginUser.bind(this)}
      >
        <Text style={buttonText}>Login</Text>
      </TouchableOpacity>
    );
  }
  loginUser() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  render() {
    console.log(this.props.error);
    const { button, buttonText, textInput, container } = styles;
    return (
      <View style={container}>
        <TextInput
          placeholder="email@gmail.com"
          onChangeText={this.onEmailInput.bind(this)}
          placeholderTextColor="white"
          style={textInput}
          autoCorrect={false}
          autoCapitalize="none"
          autoFocus={true}
        />
        <TextInput
          placeholder="password"
          onChangeText={this.onPasswordInput.bind(this)}
          placeholderTextColor="white"
          style={textInput}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
        />

        {this.renderLogginButton()}
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#5654CE'
  },
  button: {
    height: 40,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'yellow',
    marginLeft: 5,
    marginRight: 5
  },
  textInput: {
    color: 'white',
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    margin: 10,
    padding: 10,
    alignSelf: 'stretch'
  },
  buttonText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    padding: 10
  }
};
const mapStatetoProps = ({ auth }) => {
  const { email, password, loading, error } = auth;
  return { email, password, loading, error };
};
export default connect(
  mapStatetoProps,
  { emailChanged, passwordChanged, loginUser, loginUserFailed }
)(Login);
