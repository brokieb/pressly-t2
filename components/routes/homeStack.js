import { createAppContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GameScreen } from "nativeapp/components/screens/gameScreen";
import { TestScreen } from "nativeapp/components/screens/testScreen";

const screens = {
  Home: {
    screen: GameScreen,
  },
  Test: {
    screen: TestScreen,
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
