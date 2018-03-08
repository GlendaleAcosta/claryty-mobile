//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BottomNav from '../components/BottomNav';

// create a component
class BottomNavContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BottomNav {...this.props} />
    );
  }
}//

// define your styles
const styles = StyleSheet.create({
  
}); 

//make this component available to the app
export default BottomNavContainer;
