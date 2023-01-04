import * as React from "react";
import { Text, Box, FlatList, Pressable, Image, Button } from "native-base";

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  // Set Dummy Data with Array
  const siswaDW = [
    {
      name: "hydrilla",
      age: 99,
      image: "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/j0uylhFoto%203x4.JPEG"
    },
    {
      name: "sholeh",
      age: 39,
      image: "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/r48ln1670394547182.jpeg"
    },
    {
      name: "arif",
      age: 59,
      image: "https://ewr1.vultrobjects.com/lmsbzzbx/attachment/oj5aeIMG_0816.JPEG"
    }
  ]

  // Make Function handle press to get value per list

  return (
    <Box
      safeArea
      bg="primary.400"
      flex={1}
      width="100%"
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      {/* Render Array With Flatlist */}
      <FlatList data={siswaDW} renderItem={({ item, index }) => {
        return (
          <Button onPress={() => navigation.navigate("Detail Social", item)} key={index} display={"flex"} flexDirection={"row"} borderWidth={2} padding={10} width={"100%"}>
            <Image alt={item.name} source={{ uri: item.image }} width={100} height={100} />
            <Text>{item.name}</Text>
          </Button>
        )
      }} keyExtractor={(item, index) => index} />
    </Box>
  );
}
