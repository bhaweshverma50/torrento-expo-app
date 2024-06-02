import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
