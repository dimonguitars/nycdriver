import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
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
import { HandleError } from './Common/handleError';
import { Btn } from './Common/Button'
import { Actions } from 'react-native-router-flux';

class Login extends Component {
  onEmailInput(email) {
    this.props.emailChanged(email);
  }

  onPasswordInput(pass) {
    this.props.passwordChanged(pass);
  }

  renderLogginButton() {
    if (this.props.loading)
      return (
        <View>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      );
    return (
      <Btn
        title='LOGIN'
        color='black'
        backgroundColor='#DDDDDD'
        onPress={this.loginUser.bind(this)}
      />
    );
  }

  loginUser() {
    const { email, password } = this.props;
    this.formInputValidate();
    this.props.loginUser({ email, password });
  }

  createUserAccount() {
    this.props.openCreateAccountScreen();
  }
  formInputValidate() {
    if (this.props.emailRequired)
      return <Text>{this.props.emailRequired.toUpperCase()}</Text>;
    else if (this.props.passwordRequired)
      return <Text>{this.props.passwordRequired.toUpperCase()}</Text>;
    else this.props.error;
    return <Text>{this.props.error.toUpperCase()}</Text>;
  }
  render() {
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
        <View style={{ alignItems: 'center' }}>
          <Text style={logo}>NYCDriver</Text>
          <Text style={{ color: '#d6c0c0', padding: 5, fontSize: 14 }}>
            TRACK YOUR PARKING TICKET
          </Text>
        </View>

        <View style={container2}>
          <HandleError error={this.formInputValidate()} />
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
        <View>
          <Text
            style={{ color: 'white', fontSize: 11,   alignSelf: 'center' }}
          >
            {' '}
            Don't have account?
          </Text>
          <TouchableOpacity
            style={{}}
            title="Create account"
            onPress={this.createUserAccount.bind(this)}
          >
            <Text style={{ color: 'white', fontSize: 20, marginBottom: 15,   alignSelf: 'center' }}>
              {' '}
              SIGN UP NOW{' '}
            </Text>
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

    padding: 15,
    backgroundColor: '#3B28CC'
  },
  // container2: {
  //   alignItems: 'center',
  //   alignSelf: 'stretch'
  // },
  textInput: {
    alignItems: 'stretch',
    color: 'white',
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    // margin: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 8,
    flexDirection: 'row'
  },
  logo: {
    alignItems: 'center',
    alignSelf: 'center',
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
