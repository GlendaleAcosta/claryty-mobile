//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../components/Home';
import HeaderContainer from './HeaderContainer';

// create a component
class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerTitle: <HeaderContainer />,
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
      <Home {...this.props} />
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

//make this component available to the app
export default HomeContainer;
