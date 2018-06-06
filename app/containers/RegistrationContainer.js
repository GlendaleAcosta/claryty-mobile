/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import signUp from '../actions/userActions';

export default class RegistrationContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: '',
      password: '',
      search: {
        size: 25,
        color: "#29617D",
      }
    }
  }

  signUp = () => {
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
    this.props.dispatch(signUp(user));
  }

  render() {
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.container2}>
            <View style={styles.search}>
              <Icon name="email" size={search.size} color={search.color} />
              <TextInput
                style={{height: 40, flex: 1, marginLeft: 20, marginRight: 20}}
                underlineColorAndroid='#fff'
                placeholder="Enter Email"
                placeholderTextColor="#6699B1"
                onChangeText={(email) => this.setState({email})}
                blurOnSubmit={true}
                value={this.state.email}
              />
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.search}>
              <Icon name="lock" size={search.size} color={search.color} />
              <TextInput
                style={{height: 40, flex: 1, marginLeft: 20, marginRight: 20}}
                underlineColorAndroid='#fff'
                placeholder="Enter password"
                placeholderTextColor="#6699B1"
                onChangeText={(password) => this.setState({password})}
                blurOnSubmit={true}
                secureTextEntry={true}
                value={this.state.password}
              />
            </View>
          </View>

          <Text>Already have an account ? Login</Text>
        <TouchableOpacity style={styles.signUpBtn} onPress={this.signUp}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  container2: {
    // flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 35,
    paddingLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 35,
    marginLeft: 20,
    alignSelf: 'flex-start',
    marginBottom: 60
  },
  signUpBtn: {
    alignSelf: 'flex-end',
    backgroundColor: 'lightpink',
    marginTop: 65,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 15,
    paddingBottom: 15,
    marginRight: 20
  }
});
