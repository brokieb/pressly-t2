import { StyleSheet, View, ScrollView } from "react-native";
import { useContext } from "react";
import { FinishedTasksContext } from "nativeapp/components/store/contextStore";
import { SingleFinishedTodoItem } from "../elements/cards/singleFinishedTodoItem";
export const finishedTasksScreen = () => {
  const { finishedTasks, setFinishedTasks } = useContext(FinishedTasksContext);

  return (
    <View style={styles.root}>
      <ScrollView style={styles.scrollView}>
        {finishedTasks.map((item, index) => {
          return <SingleFinishedTodoItem item={{ ...item }} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    width: "100%",
  },
});
