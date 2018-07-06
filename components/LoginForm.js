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
  passwordRequired
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

  createUserAccount() {
    console.log('create account');
  }
  formInputValidate() {
    if(this.props.email)
     return (
       <Text>PLease enter email</Text>
     )
     else if (this.props.passwordRequired)
     return (
       <Text>Please enter password</Text>
     )

  }
  render() {
    console.log(this.props.passwordRequired)
    const { button, buttonText, textInput, container, logo } = styles;
    return (
      <View style={container}>
        <Text style={logo}>NYCDriver</Text>
          {this.formInputValidate()}
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

        <TouchableOpacity
          style={button}
          title="Create account"
          onPress={this.createUserAccount.bind(this)}
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
const mapStatetoProps = ({ auth }) => {
  const { email, password, loading, error, emailRequired, passwordRequired } = auth;
  return { email, password, loading, error, emailRequired, passwordRequired };
};
export default connect(
  mapStatetoProps,
  { emailChanged, passwordChanged, loginUser, loginUserFailed, emailRequired, passwordRequired }
)(Login);
