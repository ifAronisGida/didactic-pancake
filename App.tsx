import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import LoginScreen from './src/components/Login';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <View className='flex-1 justify-center content-center self-center'>
        <LoginScreen />
        <Text>App</Text>
        <StatusBar style="auto" />
      </View>
    </Stack.Navigator>
  );
}

