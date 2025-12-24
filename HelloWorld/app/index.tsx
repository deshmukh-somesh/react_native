import { Text, View, Pressable, StyleSheet } from "react-native";
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
      <Link href="/login">Login</Link>

      <Link href="/products/best-sellers/playstation" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Playstation</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0ea5e9",
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
