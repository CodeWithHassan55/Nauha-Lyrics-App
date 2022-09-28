/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AliJee,
  AliShanawar,
  Dashboard,
  Farhan,
  IrfanHaider,
  MesumAbbas,
  MirHassan,
  NadeemSarwar,
  Noha,
  RazaAbbas,
} from './screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Nauha Lyrics" component={Dashboard} />
        <Stack.Screen name="Nadeem Sarwar" component={NadeemSarwar} />
        <Stack.Screen name="Raza Abbas" component={RazaAbbas} />
        <Stack.Screen name="Mesum Abbas" component={MesumAbbas} />
        <Stack.Screen name="Irfan Haider" component={IrfanHaider} />
        <Stack.Screen name="Farhan Ali Waris" component={Farhan} />
        <Stack.Screen name="Mir Hassan Mir" component={MirHassan} />
        <Stack.Screen name="Ali Jee" component={AliJee} />
        <Stack.Screen name="Ali Shanawar" component={AliShanawar} />
        <Stack.Screen name="Nauha" component={Noha} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
