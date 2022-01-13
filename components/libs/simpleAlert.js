import { Alert } from "react-native";

const createAlert = (title, desc) => Alert.alert(title, desc, [{ text: "OK" }]);

export default createAlert;
