import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, containerStyle]}>
        {/* <Button
          color={"orange"}
          title="Click Me"
          onPress={() => console.log("Button tapped!")}
          onPress={() => alert("Hi somesh are you enjoying the react native ?")}
        /> */}

        {/* <Button
          title="Click Me"
          onPress={() =>
            Alert.alert("My title", "this is the text", [
              { text: "Yes", onPress: () => console.log("Yes Pressed!") },
              { text: "No", onPress: () => console.log("No Pressed!") },
            ])
            Prompt works with only ios and not with android
            Alert.prompt("My title", "message", (text) => console.log(text))
          }
        /> */}

        <Button
          title="Click Me 2"
          onPress={() => console.log("Click Me 2 clicked!")}
        ></Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
