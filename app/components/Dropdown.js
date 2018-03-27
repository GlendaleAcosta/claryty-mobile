//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';

// create a component
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  onPress = () => {
    this.setState({
      open: !this.state.open,
    })
    this.props.fn();
  }

  render() {
    return (
      <Ripple
          onPress={this.onPress}
        >
        <View style={styles.dropdown}>
          <Text style={styles.textStyle2}>
            {this.props.children}
          </Text>
          <Icon name={this.state.open ? "arrow-drop-up" : "arrow-drop-down"} size={30} color="#454545"/>
        </View>
      </Ripple>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  textStyle2: {
    color: '#000',
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginLeft: 10,
    // marginRight: 10,
  }
});

//make this component available to the app
export default Dropdown;
