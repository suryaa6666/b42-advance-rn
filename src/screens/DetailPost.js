import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios

const PostDetail = ({ route }) => {
  console.log("isi route boi", route)
  return (
    <View style={style.container}>
      <Text h2 style={{ fontWeight: "bold" }}>
        This Is Post Detail
      </Text>
      <Text>{route.params.data.name}</Text>
      <Text>{route.params.data.username}</Text>
      <Text>{route.params.data.email}</Text>
      <Text>{route.params.data.phone}</Text>
      <Text>{route.params.data.website}</Text>
    </View>
  );
};

export default PostDetail;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});
