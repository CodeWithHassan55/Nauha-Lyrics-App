import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RazaAbbas = ({navigation}) => {
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
        onPress={() => navigate({reciter: 'razaabbas', noha: 'ghareebezahra'})}>
        <Text style={styles.subHeadings}>Ghareeb e Zahra Ka Badan</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'razaabbas', noha: 'sakinabibi'})}>
        <Text style={styles.subHeadings}>Sakina Bibi Ka Janaza</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() =>
          navigate({reciter: 'razaabbas', noha: 'shabbirkechehre'})
        }>
        <Text style={styles.subHeadings}>Shabbir Ke Chehre</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.bottom}
        underlayColor="white"
        onPress={() =>
          navigate({reciter: 'razaabbas', noha: 'sultanekarbala'})
        }>
        <Text style={styles.subHeadings}>Sultan e Karbala Ke Mehman</Text>
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

export default RazaAbbas;
