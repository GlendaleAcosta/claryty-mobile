//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';
import Demographics from './Demographics';

// create a component
class AdverseEffectGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDemographics: false,
    }
  }

  showDemographics = () => {
    this.setState({
      showDemographics: !this.state.showDemographics,
    });
  }

  renderDemographics = () => {
    return this.state.showDemographics ? <Demographics /> :null;
  }

  render() {
    return (
      <Ripple
        onPress={this.showDemographics}
      >
        <View style={styles.container}>
          <View style={styles.cardTop}>
            <View style={styles.cardTopLabel}>
              <Text style={styles.AEText}>Death:</Text>
              <Text style={styles.casesText}>450 cases</Text>
            </View>
            <Icon name="arrow-drop-down" size={30} color="#454545"/>
          </View>
          <View style={styles.barGraph} />
        </View>
        {this.renderDemographics()}
      </Ripple>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
  },
  cardTop: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5
  },
  cardTopLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  AEText: {
    fontSize: 16,
    color: '#2391CE',
    marginRight: 5
  },
  casesText: {
    fontSize: 16,
    color: '#DF5947'
  },
  barGraph: {
    backgroundColor: '#42DBA8',
    height: 30,
    // width: 200,
    // flex: 1,
    flexDirection: 'row',
    marginRight: 5,
    marginLeft: 5,
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginBottom: 10,
  }
});

//make this component available to the app
export default AdverseEffectGraph;
