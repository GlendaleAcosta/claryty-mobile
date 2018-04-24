//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts'
// create a component
class Demographics extends Component {
  render() {
    const fill = '#54FDD9';
    const data   = [ 50, 10, null, 95, 45, null, 85, 53, null, 35, 53 ]
    return (
      <View style={styles.container}>
        <BarChart
          style={{ height: 200 }}
          data={ data }
          svg={{ fill }}
          contentInset={{ top: 30, bottom: 30 }}
        >
          <Grid/>
        </BarChart>

        <View style={styles.labelContainer}>
            <Text style={styles.label}>1-18</Text>
            <Text style={styles.label}>19-30</Text>
            <Text style={styles.label}>31-50</Text>
            <Text style={styles.label}>51+</Text>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // backgroundColor: '#fff',
    // flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    // paddingBottom: 5,
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    // alignContent: 'space-around',
    // backgroundColor: 'lightpink'
  },
  label: {
    // textAlign: 'center',
    flex: 1,
    marginLeft: 10,
    color: '#fff',
  }

});

//make this component available to the app
export default Demographics;
