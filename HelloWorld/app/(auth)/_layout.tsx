import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Slot } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <View>
      <Text>Auth Layout</Text>
      <Slot />
    </View>
  );
}


const styles  = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: "center",
        alignItems:"center",
    }
})