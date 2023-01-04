import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// Import Axios
import axios from 'axios'
import { useState } from "react";
import { useEffect } from "react";

const Posts = (props) => {
  //Init State
  const [data, setData] = useState()

  // Create LifeCycle
  //Function Exception
  useEffect(() => {
    (async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
      setData(response.data)
      // console.log("data hehe", response)
    })()
  }, [])

  //   Create Component List
  return (
    <View style={style.container}>
      <View>
        <Text>This Is Post</Text>
        {/* Render Component List */}
        <FlatList data={data ? data : null} renderItem={({ item }) => {
          return (
            <View style={{ borderWidth: 5, padding: 10, borderRadius: 10 }}>
              <Text>{item.name}</Text>
              <Text>{item.username}</Text>
              <Text>{item.email}</Text>
              <Button
                title="To Detail Post"
                onPress={() => props.navigation.navigate("DetailPost", { data: item })}
              />
            </View>
          )
        }} keyExtractor={(item, index) => index} />
      </View>
    </View>
  );
};

export default Posts;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
