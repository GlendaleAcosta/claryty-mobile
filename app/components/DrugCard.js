//import liraries
import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrugCardRight from './DrugCardRight'; 
import Ripple from 'react-native-material-ripple';
// create a component
class DrugCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempDrugName: 'Humira'
    }
  }

  selectDrug = () => {
    const { navigate } = this.props.navigation;
    navigate('DrugPage', { drugName: this.state.tempDrugName });
  }

  render() {
    return (
      <Ripple
        onPress={this.selectDrug}
      >
      <View
        style={styles.container}
      >
        <Text style={styles.drugName}>{this.state.tempDrugName}</Text>
        <DrugCardRight />
        <Icon name="more-vert" size={30} color="#454545"/>
      </View>
      </Ripple>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 70,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 12,
    flexDirection: 'row', 
    flex: 1,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 2,
  },
  drugName: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    color: '#87A6FF',
  },
});

//make this component available to the app
export default DrugCard;
