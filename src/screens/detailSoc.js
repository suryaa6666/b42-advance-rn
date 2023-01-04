import * as React from "react";
import { Text, Box, Image } from "native-base";

// Declare route
export default function DetailSoc({ route }) {
  return (
    <Box
      safeArea
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Image alt={route.params.name} source={{ uri: route.params.image }} width={100} height={100} />
      <Text>{route.params.name}</Text>
      <Text>{route.params.age}</Text>
    </Box>
  );
}
