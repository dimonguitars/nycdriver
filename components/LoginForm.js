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
  loginUserFailed,
  emailRequired,
  passwordRequired,
  openCreateAccountScreen
} from '../actions/authActions';
import CreateAccount from './CreateAccount';
import {HandleError} from './Common/handleError';
import { Actions } from 'react-native-router-flux';

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
    this.formInputValidate();
    this.props.loginUser({ email, password });
  }

  createUserAccount() {
    this.props.openCreateAccountScreen()
  }
  formInputValidate() {
    if (this.props.emailRequired)
      return <Text>{ this.props.emailRequired.toUpperCase()}</Text>;
    else if(this.props.passwordRequired)
      return <Text>{ this.props.passwordRequired.toUpperCase()}</Text>
    else (this.props.error)
      return <Text>{this.props.error.toUpperCase()}</Text>;
  }
  render() {
    console.log(this.props.openCreateAccountScreen)
    const {
      button,
      buttonText,
      textInput,
      container,
      logo,
      container2
    } = styles;
    return (
      <View style={container}>
        <View style={{alignItems:'center'}}>
          <Text style={logo}>NYCDriver</Text>
          <Text style={{color:'#d6c0c0', padding: 5, fontSize: 14}}>TRACK YOUR PARKING TICKET</Text>
        </View>

      <View style={container2}>
          <HandleError error={this.formInputValidate()}/>
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

          {this.renderLogginButton()}
        </View>
          <View style={{}}>
            <Text style={{color: 'white', fontSize: 11, justifyContent: 'center'}}> Don't have account?</Text>
          <TouchableOpacity
            style={{}}
            title="Create account"
            onPress={this.createUserAccount.bind(this)}
          >
            <Text style={{color: 'white', fontSize: 20, marginBottom: 15}}> SIGN UP NOW </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#5654CE'
  },
  container2: {
    alignItems: 'center',
    alignSelf: 'stretch'
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
    alignItems: 'center',
    color: 'white',
    fontSize: 50,
    fontWeight: '600',
    paddingTop: 100
  }
};
const mapStatetoProps = ({ auth }) => {
  const {
    email,
    password,
    loading,
    error,
    emailRequired,
    passwordRequired,
    user
  } = auth;
  return {
    user,
    email,
    password,
    loading,
    error,
    emailRequired,
    passwordRequired
  };
};
export default connect(
  mapStatetoProps,
  {
    emailChanged,
    passwordChanged,
    loginUser,
    loginUserFailed,
    emailRequired,
    passwordRequired,
    openCreateAccountScreen
  }
)(Login);
