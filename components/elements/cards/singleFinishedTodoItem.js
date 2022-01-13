import { StyleSheet, Text, View, Pressable } from "react-native";
import { useContext } from "react";
import {
  FinishedTasksContext,
} from "nativeapp/components/store/contextStore";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import createAlert from "../../libs/simpleAlert";
export const SingleFinishedTodoItem = ({ item }) => {
  const { finishedTasks, setFinishedTasks } = useContext(FinishedTasksContext);

  return (
    <View style={item.active ? styles.listItemActive : styles.listItem}>
      <View>
        <Text>Task: {item.task}</Text>
        <Text>Finished: {item.finishDate}</Text>
      </View>
      <Pressable
        onPress={async () => {
          setFinishedTasks((tasks) => {
            return tasks.filter((user) => {
              return item.task != user.task;
            });
          });
          createAlert("Removed task", "Successfully removed finished task");
        }}
      >
        <FontAwesomeIcon icon={faTimes} size={22} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemActive: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "lime",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItemEditButton: {
    display: "flex",
    justifyContent: "center",
  },
});
