import { View } from "react-native";
import { Button, Text } from "react-native-elements";
import { rootStyle, buttonsStyle } from "nativeapp/components/styles/rootStyle";
export const HomeScreen = ({ navigation }) => {
  return (
    <View style={rootStyle.root}>
      <Text style={rootStyle.mainTitle}>TODO LIST</Text>
      <View style={buttonsStyle.buttons}>
        <Button
          title="All tasks"
          onPress={() => {
            navigation.navigate("tasks");
          }}
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          buttonStyle={{
            backgroundColor: "blue",
          }}
        />
        <Button
          title="Finished tasks"
          onPress={() => {
            navigation.navigate("finishedTasks");
          }}
          containerStyle={{
            height: 40,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          buttonStyle={{
            backgroundColor: "green",
          }}
        />
      </View>
    </View>
  );
};
