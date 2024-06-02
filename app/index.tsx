import { View, Text } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-3xl">Torrento</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="rounded-md px-4 py-2 mt-4 text-md font-bold bg-white">
        Login
      </Link>
    </View>
  );
}
