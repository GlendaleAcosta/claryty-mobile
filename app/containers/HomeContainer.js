//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../components/Home';
import HeaderContainer from './HeaderContainer';
import { connect } from 'react-redux';
import RegistrationContainer from './RegistrationContainer';

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
    const { user } = this.props.userReducer;
    return user
      ? <Home {...this.props} />
      : <RegistrationContainer {...this.props} />
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
function mapStateToProps(state) {
  return {
    drugReducer: state.drugReducer,
    userReducer: state.userReducer
  };
}
export default connect(mapStateToProps)(HomeContainer);
