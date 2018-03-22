//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// create a component
class DrugCardRight extends Component {
  render() {
    return (
      <Text style={styles.riskRating}>3.5</Text>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  drugCardInfo: {
    flexDirection: 'row',
  },
  riskRating: {
    color: '#2AFBB2',
    fontSize: 18,
    marginLeft: 4,
    paddingBottom: 2,
    marginRight: 10,
  },
  reportedCases: {
    color: '#FF7777',
    fontSize: 14,
    marginLeft: 4,
  }
});

//make this component available to the app
export default DrugCardRight;
