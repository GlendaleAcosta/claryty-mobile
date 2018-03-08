//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';

// create a component
class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header />
    );
  }
}

//make this component available to the app
export default HeaderContainer;
