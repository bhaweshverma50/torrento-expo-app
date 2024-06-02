import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';

const TabIcon = ({
  icon,
  name,
  color,
  size,
  focused,
}: {
  icon: string;
  name: string;
  color: string;
  size: number;
  focused: boolean;
}) => {
  return (
    <View className="flex-1 items-center justify-center">
      <View>
        <Icon name={icon} color={color} size={size} />
      </View>
      <Text className={`${focused ? 'font-extrabold text-blue-500' : 'font-semibold text-slate-500'}`}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ tabBarShowLabel: false }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon icon="home" name="Home" color={color} size={size} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="trending"
          options={{
            title: 'Trending',
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon icon="trending-up" name="Trending" color={color} size={size} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused, size }) => (
              <TabIcon icon="person" name="Profile" color={color} size={size} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
