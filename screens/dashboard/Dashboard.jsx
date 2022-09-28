import React, {useEffect} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import logo from '../../assets/images/logo.png';
import SplashScreen from 'react-native-splash-screen';

const Dashboard = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.scrollDiv}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.mainDiv2}>
        <Image source={logo} style={styles.mainImage2} />
      </View>
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Reciters</Text>
        <TouchableHighlight
          style={styles.subContainer}
          underlayColor="white"
          onPress={() => navigation.navigate('Ali Jee')}>
          <Text style={styles.subHeadings}>Ali Jee</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.subContainer}
          underlayColor="white"
          onPress={() => navigation.navigate('Ali Shanawar')}>
          <Text style={styles.subHeadings}>Ali Shanawar</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.subContainer}
          underlayColor="white"
          onPress={() => navigation.navigate('Farhan Ali Waris')}>
          <Text style={styles.subHeadings}>Farhan Ali Waris</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.subContainer}
          underlayColor="white"
          onPress={() => navigation.navigate('Irfan Haider')}>
          <Text style={styles.subHeadings}>Irfan Haider</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.subContainer}
          underlayColor="white"
          onPress={() => navigation.navigate('Mesum Abbas')}>
          <Text style={styles.subHeadings}>Mesum Abbas</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.subContainer}
          underlayColor="white"
          onPress={() => navigation.navigate('Mir Hassan Mir')}>
          <Text style={styles.subHeadings}>Mir Hassan Mir</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.subContainer}
          underlayColor="white"
          onPress={() => navigation.navigate('Nadeem Sarwar')}>
          <Text style={styles.subHeadings}>Nadeem Sarwar</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.bottom}
          underlayColor="white"
          onPress={() => navigation.navigate('Raza Abbas')}>
          <Text style={styles.subHeadings}>Raza Abbas Zaidi</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

var styles = StyleSheet.create({
  scrollDiv: {
    height: '100%',
  },
  mainDiv2: {
    backgroundColor: '#F5F1EF',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: 'lightgray',
  },
  mainImage2: {
    width: '40%',
    height: '100%',
  },
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingBottom: 0,
    paddingTop: 0,
    height: 'auto',
  },
  heading: {
    fontSize: 22,
    color: 'black',
    marginTop: 20,
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
    marginBottom: 20,
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

export default Dashboard;
