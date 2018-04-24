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
    const {id, name, occurrences, index} = this.props;
    return (
      <Ripple
        onPress={this.showDemographics}
      >
        <View style={styles.container}>
          <View style={styles.cardTop}>
            <View style={styles.cardTopLabel}>
              <Text style={styles.AEText}>{index + 1}. {name}</Text>
              <Text style={styles.casesText}>{occurrences}</Text>
            </View>
            <Icon name="arrow-drop-down" size={25} color="#fff"/>
          </View>
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
    flex: 1,
    backgroundColor: '#174558',
    padding: 5,
    marginBottom: 6,
  },
  cardTop: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5
  },
  cardTopLabel: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5
  },
  AEText: {
    fontSize: 16,
    color: '#fff',
    marginRight: 5
  },
  casesText: {
    fontSize: 16,
    color: '#FF7676',
    fontWeight: 'bold',
    marginRight: 10,
  },
  barGraph: {
    backgroundColor: '#42DBA8',
    height: 30,
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
