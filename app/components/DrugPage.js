//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import DrugInfoTab from './DrugInfoTab';
import DrugDataTab from './DrugDataTab';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

// create a component
class DrugPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: 'Adverse Effects' },
        { key: 'second', title: 'Info' },
      ],
    };
  }

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;


  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <DrugDataTab {...this.props} />;
      case 'second':
        return <DrugInfoTab {...this.props} />;
    default:
      return null;
    }
  }
  
  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default DrugPage;
