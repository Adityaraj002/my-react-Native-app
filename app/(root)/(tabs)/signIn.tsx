import React from 'react';
import { ScrollView, Image, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import icons from '~/constants/icons';
import images from '~/constants/images';

const SingIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName="h-full">
        <Image source={images.onboarding} className="h-4/6 w-full" resizeMode="contain" />
        <View className="px-10">
          <Text className="text-black-200 text-center font-rubik text-base uppercase">
            Welcome To ReState
          </Text>
          <Text className="text-black-300 mt-2 text-center font-rubik-bold text-3xl">
            Let's Get You Closer to {'\n'}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-black-200 mt-12 text-center font-rubik text-lg">
            Login to ReState with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="mt-5 w-full rounded-full bg-white py-4 shadow-md shadow-zinc-300">
            <View
              className="flex flex-row items-center justify-center 
            ">
              <Image source={icons.google} className="mr-4 h-5 w-5" resizeMode="contain" />
              <Text className="text-black-300 ml-2 font-rubik-medium text-lg ">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingIn;
