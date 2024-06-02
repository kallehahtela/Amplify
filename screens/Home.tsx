import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (

    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    margin: 0,
  }
});

export default Home