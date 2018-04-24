//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { searchDrug } from '../actions/drugActions';

// create a component
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      search: {
        size: 30,
        color: "#29617D",
      }
    };
  }

  handleSubmit = () => {
    this.props.dispatch(searchDrug(this.state.searchQuery));
  }

  render() {
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.search}>
          <Icon name="search" size={search.size} color={search.color} />
          <TextInput
            style={{height: 40, flex: 1, marginLeft: 10, marginRight: 10}}
            clearTextOnFocus={true}
            underlineColorAndroid='#fff'
            placeholder="Search Medication"
            placeholderTextColor="#6699B1"
            onChangeText={(searchQuery) => this.setState({searchQuery})}
            blurOnSubmit={true}
            value={this.state.text}
            onSubmitEditing={this.handleSubmit}
          />
        </View>
        <Icon name="menu" size={30} color={search.color} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 35,
    paddingLeft: 10,
    marginRight: 10,
  }
});

//make this component available to the app
export default Header;
