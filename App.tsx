import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

export default function App() {
  return (
    <View>
      <Text className="text-xl">Opeghn up</Text>
      <StatusBar style="auto" />
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
