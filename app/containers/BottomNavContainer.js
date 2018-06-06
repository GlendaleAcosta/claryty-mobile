//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNav from '../components/BottomNav';
import { connect } from 'react-redux';

// create a component
class BottomNavContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props.userReducer;
    return user ? (
      <BottomNav {...this.props} />
    ): null
  }
}//

// define your styles
const styles = StyleSheet.create({

});

function mapStateToProps(state) {
  return {
    drugReducer: state.drugReducer,
    userReducer: state.userReducer
  };
}
export default connect(mapStateToProps)(BottomNavContainer);
