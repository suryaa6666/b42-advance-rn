import * as React from "react";
import { Text, Box, Button } from "native-base";

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  return (
    <Box bg="primary.400" flex={1} alignItems="center" justifyContent="center">
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        Life's too short
      </Text>
      <Button onPress={() => navigation.navigate("IncDec")}></Button>

      {/* Create Button */}
    </Box>
  );
}
