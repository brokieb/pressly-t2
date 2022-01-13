import {
  StyleSheet,
  View,
  Button,
  TextInput,
} from "react-native";
import { useState, useContext } from "react";
import {
  AllTasksContext,
} from "nativeapp/components/store/contextStore";
import Moment from "moment";
export const InputSingleItem = () => {
  const [input, setInput] = useState("");
  const { tasks, setTasks } = useContext(AllTasksContext);

  return (
    <>
      <TextInput
        placeholder="Add new task"
        onChangeText={setInput}
        value={input}
        style={styles.formContainerInput}
      />
      <View style={styles.formContainerButtonContainer}>
        <Button
          title="Add new task"
          onPress={async () => {
            let tasksArray = [
              ...tasks,
              { task: input, addDate: Moment().format("DD-MM-YYYY HH:mm") },
            ];
            setTasks(tasksArray);
            setInput("");
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formContainerInput: {
    paddingRight: 50,
    borderBottomWidth: 2,
    borderColor: "green",
    flex: 1,
  },
  formContainerButtonContainer: { paddingHorizontal: 5 },
  scrollView: {
    marginVertical: 20,
  },
});
