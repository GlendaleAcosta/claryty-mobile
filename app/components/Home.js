//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BottomNavContainer from '../containers/BottomNavContainer';
import { LinearGradient } from 'expo';
import DrugCard from './DrugCard';

// create a component
class Home extends Component {
  constructor(props) {
    super(props);
  }

  renderCards = () => {
    const { drugs } = this.props.drugReducer;
    return drugs ? drugs.map((drug) => {
      return <DrugCard key={drug.primaryid} drug={drug} {...this.props}  />
    })
    : null;
  }

  render() {
    const { drugs } = this.props.drugReducer;
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#265A74', '#2C6A89']} style={styles.linearGradient}>
        <ScrollView style={styles.scrollView}>
          {this.renderCards()}
        </ScrollView>
        </LinearGradient>
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
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    alignSelf: 'stretch'
  },
  linearGradient: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Home;
