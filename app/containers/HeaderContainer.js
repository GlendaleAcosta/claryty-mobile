//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import { connect } from 'react-redux';

// create a component
class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

//make this component available to the app
function mapStateToProps(state) {
  return {
    drugReducer: state.drugReducer
  };
}

export default connect(mapStateToProps)(HeaderContainer);
