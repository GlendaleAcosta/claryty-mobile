//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Picker, View } from 'react-native';
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

  renderAdverseEffects = () => {
    const { adverseEffects } = this.props.drugReducer;
    // const adverseEffects = [
    //   {id: 1, name: 'Chronic Pain', cases: 1436},
    //   {id: 2, name: 'Severe Cough', cases: 1285},
    //   {id: 3, name: 'Severe Headache', cases: 902},
    //   {id: 4, name: 'Back Pain', cases: 690},
    //   {id: 5, name: 'Death', cases: 503},
    //   {id: 6, name: 'Drowsiness', cases: 468},
    //   {id: 7, name: 'Severe Confusion', cases: 455},
    //   {id: 8, name: 'Depression', cases: 385},
    //   {id: 9, name: 'Hunger for brains', cases: 89},
    //   {id: 10, name: 'Itchy Scalp', cases: 35}
    // ]
    return adverseEffects.length > 0 ? adverseEffects.map((effect, i) => {
      console.log(i);
      return <AdverseEffectGraph
        index={i}
        key={effect.id}
        id={effect.id}
        name={effect.reaction}
        occurrences={effect.occurrences}
      />
    })
    : null;
  }

  render() {
    console.log(this.props);
    const { currentDrug, fetchingAdverseEffects } = this.props.drugReducer;
    // currentDrug = currentDrug[0] + currentDrug.substring(1, currentDrug.length).toLowerCase();
    return !fetchingAdverseEffects ? (
      <ScrollView style={styles.container}>
        <Text style={styles.drugName}>{currentDrug.drugName}</Text>
        <Text style={styles.textStyle}>Choose Year: </Text>
        <Dropdown fn={this.chooseYear} >
          2017 Data
        </Dropdown>
        <Text style={styles.subjectTitle}>Top 10 Adverse Effects:</Text>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>Adverse Effect</Text>
          <Text style={styles.categoryRight}># of Cases</Text>
        </View>
        {this.renderAdverseEffects()}

        {this.renderPicker()}
      </ScrollView>
    ) : null;
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#265A74',
    position: 'relative',
    padding: 10,
  },
  drugName: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    paddingBottom: 15
    // marginBottom: 7
  },
  textStyle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    // marginLeft: 10,
    // marginRight: 10
  },
  picker: {
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  subjectTitle: {
    color: '#fff',
    fontSize: 19,
    paddingTop: 20,
    paddingBottom: 8,
    fontWeight: 'bold'
  },
  categoryContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  category: {
    color: '#fff',
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  categoryRight: {
    color: '#fff',
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: 'bold',
    marginRight: 20,
  },
  itemStyle: {
  }
});

//make this component available to the app
export default DrugDataTab;
