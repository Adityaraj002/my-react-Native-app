import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const Propeties = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Properties {id}</Text>
    </View>
  );
};

export default Propeties;
