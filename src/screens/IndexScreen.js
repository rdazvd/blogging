import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const value = React.useContext(BlogContext);

  return (
    <View>
      <Text>Index screen</Text>
      <Text>{value}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default IndexScreen;
