//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { getDrugInfo } from '../actions/drugActions';
import { LinearGradient } from 'expo';

// create a component
class DrugInfoTab extends Component {
  constructor(props) {
    super(props);
    props.dispatch(getDrugInfo('Humira'));

  }

  renderDrugInfo = () => {
    const { drugInfo } = this.props.drugReducer;
    let shortInfo;
    let i = 405
    if (drugInfo.length > 405) {
      const size = drugInfo.length - 1;
      while(
        drugInfo.charAt(i) != ' '
        && i < size
        && drugInfo.charAt(i) != ','
        && drugInfo.charAt(i) != ';'
      ) {
        i++;
      }
      shortInfo = drugInfo.substring(0, i);
      shortInfo = shortInfo + "..."
    }
    return shortInfo;
  }

  render() {
    return (
      <LinearGradient colors={['#265A74', '#2C6A89']} style={styles.linearGradient}>
        <ScrollView style={styles.container}>
          <Text style={styles.drugName}>HUMIRA</Text>
          <Text style={styles.drugName}>Adalimumab</Text>
          <Text style={styles.drugInfo}>{this.renderDrugInfo()}</Text>
        </ScrollView>
      </LinearGradient>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#ff4081',
  },
  drugInfo: {
    color: '#fff',
    fontSize: 16
  },
  drugName: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 10
  },
  linearGradient: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default DrugInfoTab;
