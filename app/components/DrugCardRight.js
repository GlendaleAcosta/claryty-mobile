//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// create a component
class DrugCardRight extends Component {
  render() {
    return (
      <View>
        <View style={styles.drugCardInfo}>
          <Icon name="warning" size={20} color="#FB6AEB"/>
          <Text style={styles.riskRating}>Risk Rating: 3.5</Text>
        </View>
        <View style={styles.drugCardInfo}>
          <Icon name="report" size={20} color="#FF7777"/>
          <Text style={styles.reportedCases}>1,433 Reported Cases</Text>
        </View>
      </View>
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
    color: '#FB6AEB',
    fontSize: 14,
    marginLeft: 4,
    paddingBottom: 2,
  },
  reportedCases: {
    color: '#FF7777',
    fontSize: 14,
    marginLeft: 4,
  }
});

//make this component available to the app
export default DrugCardRight;