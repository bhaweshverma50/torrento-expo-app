import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Trending = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text>Trending</Text>
      </View>
    </SafeAreaView>
  );
};

export default Trending;
