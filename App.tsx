import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Main from './Main';

const App = () => {
  return (
    <View style={styles.container}>
      <Main/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up all available space
  },
});
