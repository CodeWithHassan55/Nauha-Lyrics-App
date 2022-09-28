import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MesumAbbas = ({navigation}) => {
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
        onPress={() => navigate({reciter: 'mesumabbas', noha: 'alamabbaska'})}>
        <Text style={styles.subHeadings}>Alam Abbas Ka</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'mesumabbas', noha: 'matamkaro'})}>
        <Text style={styles.subHeadings}>Matam Karo Hussain Ka</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'mesumabbas', noha: 'SakinaShamke'})}>
        <Text style={styles.subHeadings}>Sakina Sham Ke Zindan Mai</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'mesumabbas', noha: 'saqqaesakina'})}>
        <Text style={styles.subHeadings}>Saqqa e Sakina Abbas Abbas</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'mesumabbas', noha: 'taboot'})}>
        <Text style={styles.subHeadings}>72 Taboot</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.bottom}
        underlayColor="white"
        onPress={() =>
          navigate({reciter: 'mesumabbas', noha: 'taweezehassan'})
        }>
        <Text style={styles.subHeadings}>Taweez e Hassan</Text>
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

export default MesumAbbas;
