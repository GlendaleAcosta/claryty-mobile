//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrugCardRight from './DrugCardRight';
import Ripple from 'react-native-material-ripple';
import { getAdverseEffects } from '../actions/drugActions';

// create a component
class DrugCard extends Component {
  constructor(props) {
    super(props);
  }

  selectDrug = () => {
    let { drugName } = this.props.drug;
    drugName = drugName[0] + drugName.substring(1, drugName.length).toLowerCase();
    const { navigate } = this.props.navigation;
    this.props.dispatch(getAdverseEffects(drugName));
    navigate('DrugPage', { drugName: drugName });
  }

  render() {
    let { drugName } = this.props.drug;
    drugName = drugName[0] + drugName.substring(1, drugName.length).toLowerCase();
    return (
      <Ripple onPress={this.selectDrug} >
        <View style={styles.container} >
          <Text style={styles.drugName}>{drugName}</Text>
          <DrugCardRight />
          <Icon name="keyboard-arrow-right" size={30} color="#fff"/>
        </View>
      </Ripple>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 50,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    borderBottomWidth: 2,
    borderColor: '#78AAC1',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 12,
    flexDirection: 'row',
    flex: 1,
  },
  drugName: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20,
    color: '#fff',
  },
});

//make this component available to the app
export default DrugCard;
