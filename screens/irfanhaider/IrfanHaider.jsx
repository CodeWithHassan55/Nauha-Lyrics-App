import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const IrfanHaider = ({navigation}) => {
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
        onPress={() => navigate({reciter: 'irfanhaider', noha: 'busghazi'})}>
        <Text style={styles.subHeadings}>Bus Ghazi Hojaye Razi</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() =>
          navigate({reciter: 'irfanhaider', noha: 'hussainjanam'})
        }>
        <Text style={styles.subHeadings}>Hussain Janam Hussain</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() =>
          navigate({reciter: 'irfanhaider', noha: 'matameshabbir'})
        }>
        <Text style={styles.subHeadings}>Matam e Shabbir</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'irfanhaider', noha: 'nabhoolay'})}>
        <Text style={styles.subHeadings}>Na Bhoolay Ga Sajjad</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.subContainer}
        underlayColor="white"
        onPress={() => navigate({reciter: 'irfanhaider', noha: 'qatlghazika'})}>
        <Text style={styles.subHeadings}>Qatl Ghazi Ka Baba Huwa Hai</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.bottom}
        underlayColor="white"
        onPress={() => navigate({reciter: 'irfanhaider', noha: 'shehzadiyan'})}>
        <Text style={styles.subHeadings}>Shehzadiyan Roti Rahi</Text>
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

export default IrfanHaider;
