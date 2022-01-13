import { StyleSheet, View, ScrollView } from "react-native";
import { useContext } from "react";
import { SingleTodoItem } from "nativeapp/components/elements/cards/singleTodoItem";
import { AllTasksContext } from "nativeapp/components/store/contextStore";
import { InputSingleItem } from "../elements/forms/inputSingleItem";
export const tasksScreen = () => {
  const { tasks, setTasks } = useContext(AllTasksContext);

  return (
    <View style={styles.root}>
      <View style={styles.formContainer}>
        <InputSingleItem />
      </View>
      <ScrollView style={styles.scrollView}>
        {tasks.map((item, index) => {
          return <SingleTodoItem item={{ ...item }} key={index} />;
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
