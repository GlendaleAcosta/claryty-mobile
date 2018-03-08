//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Picker } from 'react-native';
import { getTop10Reactions } from '../actions/drugActions';
import Dropdown from './Dropdown';
import AdverseEffectGraph from './AdverseEffectGraph';

// create a component
class DrugDataTab extends Component {
  constructor(props) {
    super(props);
    // props.dispatch(getTop10Reactions('2015', 'Aspirin'));
    this.state = {
      openPicker: false,
    }
  }

  chooseYear = () => {
    this.setState({
      openPicker: true
    })
  }

  renderPicker = () => {
    return this.state.openPicker ?
    <Picker
      style={styles.picker}
      itemStyle={styles.itemStyle}
      selectedValue={this.state.language}
      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
    : null
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textStyle}>Choose Year: </Text>
        <Dropdown fn={this.chooseYear} >
          2015 Data
        </Dropdown>
        <AdverseEffectGraph />
        <AdverseEffectGraph />
        <AdverseEffectGraph />
        <AdverseEffectGraph />
        <AdverseEffectGraph />
        <AdverseEffectGraph />
        <AdverseEffectGraph />
        <AdverseEffectGraph />
        <AdverseEffectGraph />
        <AdverseEffectGraph />
        {this.renderPicker()}
      </ScrollView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    position: 'relative'
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  },
  picker: {
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  itemStyle: {
  }
});

//make this component available to the app
export default DrugDataTab;
