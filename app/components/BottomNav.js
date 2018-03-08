//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';

// create a component
class BottomNav extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Ripple
          style={styles.iconContainer}
        >
          <Icon name="home" size={40} color="#3778E8" />
          <Text style={styles.iconText}>HOME</Text>
        </Ripple>
        <Ripple
          style={styles.iconContainer}
        >
          <Icon name="add" size={40} color="#ADADAF" />
          <Text style={styles.iconText}>ADD CASE</Text>
        </Ripple>
        <Ripple style={styles.iconContainer}>
          <Icon name="info" size={40} color="#ADADAF" />
          <Text style={styles.iconText}>INFO</Text>
        </Ripple>
        <Ripple style={styles.iconContainer}>
          <Icon name="account-circle" size={40} color="#ADADAF" />
          <Text style={styles.iconText}>ACCOUNT</Text>
        </Ripple>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,//
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 95, 
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#A8A4A4',
    shadowOpacity: .5,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowRadius: 6,
    borderTopWidth: Platform.OS === 'ios' ? 0 : 1,
    borderColor: '#3778E8',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    alignSelf: 'stretch',
  },
  iconText: {
    fontSize: 10,
    color: '#3778E8', 
  }
});

//make this component available to the app
export default BottomNav;
