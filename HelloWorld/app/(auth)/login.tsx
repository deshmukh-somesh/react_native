import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Link href="./register">Create accout</Link>
      <View style={styles.button}>
        <Button title="Login" onPress={() => router.push("/profile")} />
        <Button title="Login" onPress={() => router.replace("/profile")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    gap: 10,
  },
});
