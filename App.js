import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './app/reducers';
import {
  StackNavigator,
} from 'react-navigation';
import HomeContainer from './app/containers/HomeContainer';
import DrugPageContainer from './app/containers/DrugPageContainer';
import BottomNavContainer from './app/containers/BottomNavContainer';

const middleware = applyMiddleware(thunk, reduxPromise);
const store = createStore(reducers, middleware);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppStackNavigator />
          <BottomNavContainer {...this.props} />
        </View>
      </Provider>
    );
  }
}

const AppStackNavigator = StackNavigator({
  Home: { screen: HomeContainer },
  DrugPage: { screen: DrugPageContainer },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
