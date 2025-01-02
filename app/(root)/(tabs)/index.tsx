// import { Stack, Link } from 'expo-router';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text className="my-10 font-rubik text-lg font-bold">Welcome</Text>
      <Link href="/signIn">SignIn</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/properites/1">SignIn</Link>
    </View>
  );
}
