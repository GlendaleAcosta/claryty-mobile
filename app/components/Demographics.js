//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Demographics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Age</Text>
        <View style={styles.resultContainer}>
          <View style={styles.result}>
            <Text style={styles.label2}>2%</Text>
            <Text style={styles.label3}>1-18</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.label2}>2%</Text>
            <Text style={styles.label3}>1-18</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.label2}>2%</Text>
            <Text style={styles.label3}>1-18</Text>
          </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingBottom: 5,
  },
  label: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 16,
    color: '#ADADAD',
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  label2: {
    fontSize: 16,
    color: '#000',
    flex: 2,
  },
  label3: {
    fontSize: 16,
    color: '#000',
    flex: 4,
  },
  resultContainer: {
    flex: 3,
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  result: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
  }

});

//make this component available to the app
export default Demographics;
