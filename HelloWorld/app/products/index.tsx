import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ProductList() {
  return (
    <View>
      <Text>Products</Text>

      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>

      <Link href="/products/best-sellers/playstation-5">
        Playstation 5 (best Sellers)
      </Link>
      <Link href="/products/deals/playstation-5">Playstation 5 (Deals)</Link>
      <Link href="/products/search/playstation-5">Playstation 5 (Search)</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
