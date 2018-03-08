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

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#16BAEC', '#6FD2B7']} style={styles.linearGradient}>
        <ScrollView style={styles.scrollView}>
          <DrugCard {...this.props} />
          <DrugCard {...this.props} />
          <DrugCard {...this.props} />
          <DrugCard {...this.props} />
          <DrugCard {...this.props} />
          <DrugCard {...this.props} />
          <DrugCard {...this.props} />
          <DrugCard {...this.props} />
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
