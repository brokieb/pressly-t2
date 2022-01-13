import { StyleSheet, Text, View, Pressable } from "react-native";
import { useContext } from "react";
import {
  AllTasksContext,
  EditModeContext,
  FinishedTasksContext,
} from "nativeapp/components/store/contextStore";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import Moment from "moment";
import createAlert from "../../libs/simpleAlert";
export const SingleTodoItem = ({ item }) => {
  const { tasks, setTasks } = useContext(AllTasksContext);
  const { editMode, setEditMode } = useContext(EditModeContext);
  const { finishedTasks, setFinishedTasks } = useContext(FinishedTasksContext);

  return (
    <View style={item.active ? styles.listItemActive : styles.listItem}>
      <View>
        <Text>Task: {item.task}</Text>
        <Text>Added: {item.addDate}</Text>
      </View>
      <View style={styles.listItemEditButton}>
        {editMode ? (
          <Pressable
            onPress={async () => {
              setTasks((tasks) => {
                return tasks.filter((user) => {
                  return item.task != user.task;
                });
              });
              createAlert("Removed task", "Successfully removed task");
            }}
          >
            <FontAwesomeIcon icon={faTimes} size={22} />
          </Pressable>
        ) : (
          <Pressable
            onPress={async () => {
              setTasks((tasks) => {
                return tasks.filter((user) => {
                  return item.task != user.task;
                });
              });
              setFinishedTasks((tasks) => {
                return [
                  ...tasks,
                  {
                    task: item.task,
                    finishDate: Moment().format("DD-MM-YYYY HH:mm"),
                  },
                ];
              });
              createAlert("Finished task", "Successfully finished task");
            }}
          >
            <FontAwesomeIcon icon={faThumbsUp} size={22} />
          </Pressable>
        )}
      </View>
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
