import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Farhan = ({navigation}) => {
  const navigate = async item => {
    try {
      await AsyncStorage.setItem('noha', JSON.stringify(item));
      navigation.navigate('Nauha');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Nauhay</Text>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'farhanali', noha: 'abbaskealam'})}>
        <Text style={styles.subHeadings}>Abbas Ka Alam Hai</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'farhanali', noha: 'ghamehussain'})}>
        <Text style={styles.subHeadings}>Gham e Hussain Dilam</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'farhanali', noha: 'hussaintere'})}>
        <Text style={styles.subHeadings}>Hussain Tere Lahu ki Khushbu</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'farhanali', noha: 'kaisaymain'})}>
        <Text style={styles.subHeadings}>Kaisay Main Dafnaon Sakina</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'farhanali', noha: 'saatqadam'})}>
        <Text style={styles.subHeadings}>Saat Qadam</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'farhanali', noha: 'sadarahay'})}>
        <Text style={styles.subHeadings}>Sada Rahay Ga Hussain Hussain</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'farhanali', noha: 'shamegareeban'})}>
        <Text style={styles.subHeadings}>Sham e Gareeban Aye</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'farhanali', noha: 'ujargaye'})}>
        <Text style={styles.subHeadings}>Ujar Gaye Aj Sani e Zahra</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.bottom}
        underlayColor="white"
        onPress={() => navigate({reciter: 'farhanali', noha: 'zainabzainab'})}>
        <Text style={styles.subHeadings}>Zainab Zainab</Text>
      </TouchableHighlight>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    minHeight: '100%',
  },
  heading: {
    fontSize: 22,
    color: 'black',
    marginBottom: 20,
    fontFamily: 'Poppins-Medium',
  },
  subContainer: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 10,
    borderTopWidth: 1.5,
    borderTopColor: 'black',
  },
  bottom: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
    borderTopWidth: 1.5,
    borderTopColor: 'black',
  },
  subHeadings: {
    marginTop: 3,
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
});

export default Farhan;
