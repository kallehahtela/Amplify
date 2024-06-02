import { Platform } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Colors from '@/constants/Colors';

import Home from '@/screens/Home';
import Explore from '@/screens/Explore';
import Profile from '@/screens/Profile';

const BottomTab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
      <BottomTab.Navigator screenOptions={{
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: Colors.black,
        tabBarStyle: {
          backgroundColor: Colors.white,
          height: Platform.OS === 'ios' ? 80 : 65,
          width: '100%',
          paddingBottom: Platform.OS === 'ios' ? 24 : 10,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold',
        }
      }}
        sceneContainerStyle={{
          backgroundColor: Colors.white,
      }}>
        <BottomTab.Screen 
          name='Home'
          component={Home}
          options={{
            tabBarIcon: () => (
              <Ionicons name='home-outline' size={26} color={Colors.black} />
            ),
          headerShown: false,
          }}
        />

        <BottomTab.Screen 
          name='Explore'
          component={Explore}
          options={{
            tabBarIcon: () => (
              <Ionicons name='search-outline' size={26} color={Colors.black} />
            ),
            headerShown: false,
          }}
        />

        <BottomTab.Screen 
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: () => (
              <Ionicons name='person-outline' size={26} color={Colors.black} />
            ),
            headerShown: false,
          }}
        />

      </BottomTab.Navigator>
  );
}

export default BottomTabsNavigator;