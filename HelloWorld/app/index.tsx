import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home Page</Text>
      <Link href="/about">About</Link>
      <Link href="/profile/somesh">Profile</Link>
      <Link href="/products">Products</Link>
      <Link href="/missing-route">Missing route</Link>
    </View>
  );
}
