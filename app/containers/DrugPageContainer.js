//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DrugPage from '../components/DrugPage';
import { connect } from 'react-redux';
import { getDrugInfo } from '../actions/drugActions';

// create a component
class DrugPageContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerStyle: { 
      backgroundColor: '#fff',
      height: 55,
    },
    headerTitleStyle: { 
      color: 'green',
    },
  }

  render() {
    return (
      <DrugPage {...this.props} />
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
});

function mapStateToProps(state) {
  return {
    drugReducer: state.drugReducer,
  };
}
export default connect(mapStateToProps)(DrugPageContainer);
