import * as React from "react";
import { Text, Box } from "native-base";
import { TouchableOpacity } from "react-native";

export default function Hello() {
  return (
    <Box
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>

      <TouchableOpacity
        onPress="#"
        style={{
          backgroundColor: "#487eb0",
          height: 40,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          margin: 20,
        }}
      >
        <Text color={{ color: "white" }}>Screen Increment and Decrement</Text>
      </TouchableOpacity>
    </Box>
  );
}
