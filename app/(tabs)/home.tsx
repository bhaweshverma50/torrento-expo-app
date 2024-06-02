import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
