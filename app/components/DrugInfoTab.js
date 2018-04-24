//import liraries
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Image, View } from 'react-native';
import { getDrugInfo } from '../actions/drugActions';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/MaterialIcons';

// create a component
class DrugInfoTab extends Component {
  constructor(props) {
    super(props);
  }

  renderDrugInfo = () => {
    const { drugInfo } = this.props.drugReducer;
    let shortInfo;
    let i = 405
    if (drugInfo.length > 405) {
      const size = drugInfo.length - 1;
      while(
        drugInfo.charAt(i) != ' '
        && i < size
        && drugInfo.charAt(i) != ','
        && drugInfo.charAt(i) != ';'
      ) {
        i++;
      }
      shortInfo = drugInfo.substring(0, i);
      shortInfo = shortInfo + "..."
    }
    return shortInfo;
  }

  render() {
    const { drugInfo, currentDrug } = this.props.drugReducer;
    return drugInfo ? (
      <LinearGradient colors={['#265A74', '#2C6A89']} style={styles.linearGradient}>
        <ScrollView style={styles.container}>
          <View style={styles.topContainer}>
            <Image
              style={styles.pill}
              source={require('./pill.png')}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.drugName}>{currentDrug.drugName}</Text>
              <Text style={styles.genericName}>{currentDrug.genericName}</Text>
            </View>
          </View>
          <Text style={styles.subjectTitle}>Summary:</Text>
          <Text style={styles.drugInfo}>{this.renderDrugInfo()}</Text>
          <View style={styles.readMoreContainer}>
            <Text style={styles.readMore}>Read More</Text>
            <Icon name="arrow-forward" size={20} color="#A9D1FF" />
          </View>

          <Text style={styles.subjectTitle}>Used to Treat:</Text>
          <Text style={styles.condition}>
            Rheumatoid arthritis
          </Text>
          <Text style={styles.condition}>
            Psoriatic arthritis
          </Text>
          <Text style={styles.condition}>
            Ankylosing spondylitis
          </Text>
          <Text style={styles.condition}>
            Crohn’s disease
          </Text>
        </ScrollView>
      </LinearGradient>
    ) : null;
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#ff4081',
  },
  drugInfo: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 27,
    paddingBottom: 14,
  },
  drugName: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold'
    // marginBottom: 7
  },
  genericName: {
    color: '#F4F4F4',
    fontSize: 24,
    fontStyle: 'italic'
  },
  linearGradient: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: 25,
    flex: 1,
  },
  pill: {
    height: 73,
    width: 73,
    padding: 5,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 27
  },
  subjectTitle: {
    color: '#fff',
    fontSize: 18,
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  readMoreContainer: {
    // flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 24,
  },
  readMore: {
    color: '#A9D1FF',
    fontSize: 16,
    marginRight: 10,
  },
  condition: {
    backgroundColor: '#174558',
    padding: 15,
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
    borderRadius: 6,
  }
});

//make this component available to the app
export default DrugInfoTab;
