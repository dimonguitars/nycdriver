import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {
  createUserAccount,
  emailChanged,
  passwordChanged,
  PasswordValidate
} from '../actions/authActions';

class CreateAccount extends Component {
  onEmailInput(email) {
    this.props.emailChanged(email);
  }

  onPasswordInput(pass) {
    this.props.passwordChanged(pass);
  }

  onPasswordInputValidate(passwordValidate){
    this.props.PasswordValidate(passwordValidate)
  }

  handleCreateAccount() {
    this.passwordValidate()
  }
  passwordValidate(){
    const { password, passValidate, email } = this.props;
    if(password != passValidate){
        alert("Password not match")
        return
    }
    this.props.createUserAccount({ email, password })
  }

  handleError = () => {
    (this.props.error)
    return (
      <Text>
        {this.props.error}
      </Text>
    )
  }

  render() {
    console.log(this.props.error)
    const { button, buttonText, textInput, container, logo } = styles;
    return (
      <View style={container}>
        <Text style={logo}>NYCDriver</Text>
        {this.handleError()}
        <TextInput
          placeholder="email@gmail.com"
          onChangeText={this.onEmailInput.bind(this)}
          placeholderTextColor="#7f9cdb"
          style={textInput}
          autoCorrect={false}
          autoCapitalize="none"
          autoFocus={true}
        />
        <TextInput
          placeholder="password"
          onChangeText={this.onPasswordInput.bind(this)}
          placeholderTextColor="#7f9cdb"
          style={textInput}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          placeholder=" confirm password"
          onChangeText={this.onPasswordInputValidate.bind(this)}
          placeholderTextColor="#7f9cdb"
          style={textInput}
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={button}
          title="Create account"
          onPress={this.handleCreateAccount.bind(this)}
        >
          <Text style={buttonText}>Create account</Text>
        </TouchableOpacity>
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
    margin: 5
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
  },
  logo: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 50,
    fontWeight: '600',
    marginBottom: 100
  }
};
mapStatetoProps = ({ auth }) => {
  const { user, error, email, password, passValidate } = auth;
  return { user, error, email, password, passValidate };
};
export default connect(
  mapStatetoProps,
  { createUserAccount, emailChanged, passwordChanged, PasswordValidate }
)(CreateAccount);
