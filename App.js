import "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { useState, useMemo, useEffect } from "react";
import {
  AllTasksContext,
  EditModeContext,
  FinishedTasksContext,
} from "nativeapp/components/store/contextStore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { tasksScreen } from "nativeapp/components/screens/tasksScreen";
import { finishedTasksScreen } from "nativeapp/components/screens/finishedTasksScreen";
import { HomeScreen } from "nativeapp/components/screens/homeScreen";
import storage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState([]);
  const tasksData = useMemo(() => ({ tasks, setTasks }), [tasks]);

  const [editMode, setEditMode] = useState(false);
  const editModeData = useMemo(() => ({ editMode, setEditMode }), [editMode]);

  const [finishedTasks, setFinishedTasks] = useState([]);
  const finishedTasksData = useMemo(
    () => ({ finishedTasks, setFinishedTasks }),
    [finishedTasks]
  );

  useEffect(() => {
    storage.getItem("@tasks").then((item) => {
      const readyData = JSON.parse(item);
      if (Array.isArray(readyData)) {
        setTasks(readyData);
      }
    });

    storage.getItem("@finishedTasks").then((item) => {
      const readyData = JSON.parse(item);
      if (Array.isArray(readyData)) {
        setFinishedTasks(readyData);
      }
    });
  }, []);

  useEffect(async () => {
    await storage.setItem("@tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(async () => {
    await storage.setItem("@finishedTasks", JSON.stringify(finishedTasks));
  }, [finishedTasks]);

  return (
    <AllTasksContext.Provider value={tasksData}>
      <FinishedTasksContext.Provider value={finishedTasksData}>
        <EditModeContext.Provider value={editModeData}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen
                name="tasks"
                component={tasksScreen}
                options={{
                  headerRight: () => (
                    <Icon
                      name={editMode ? "check" : "edit"}
                      type="font-awesome"
                      color="#f50"
                      onPress={() =>
                        setEditMode((prev) => {
                          return prev ? false : true;
                        })
                      }
                      containerStyle={{ margin: 10 }}
                    />
                  ),
                }}
              />
              <Stack.Screen
                name="finishedTasks"
                component={finishedTasksScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </EditModeContext.Provider>
      </FinishedTasksContext.Provider>
    </AllTasksContext.Provider>
  );
}
