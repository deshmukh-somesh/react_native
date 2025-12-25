import { Stack } from "expo-router";
import { Text, Pressable } from "react-native";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#6a51ae" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerRight: () => (
          <Pressable onPress={() => alert("Menu button pressed!")}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
          </Pressable>
        ),
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
          // headerStyle: { backgroundColor: "#7ze51ae" },
          // headerTintColor: "#fff",
          // headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stack>
  );
}
