import React from "react";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps, theme } from "../theme";
import { MaterialIcons } from "@expo/vector-icons";
import GenericButton from "../components/GenericButton";

const Box = createBox<ThemeProps>();
const Text = createText<ThemeProps>();

const Home = () => {
  return (
    <Box
      //   style={{ flex: 1, backgroundColor: "yellow", padding: 8, margin: 8 }}
      flex={1}
      bg="azureishWhite"
      p="m"
      m="m"
      justifyContent="center"
      alignItems="center"
      flexDirection={{
        phone: "column",
        tablet: "row",
      }}
    >
      <Box gap="m" width="100%" bg="white" borderRadius="m" p="m">
        <Box flexDirection="row" alignItems="center">
          <MaterialIcons
            name="favorite"
            size={24}
            color={theme.colors.purple}
          />

          <Text ml="s" variant="h1">
            Hello World
          </Text>
        </Box>
        <Text variant="body">Lorem ipsum</Text>
        <Text>Im the default one</Text>
        <GenericButton variant="primary" label="Click Here" />
        <GenericButton variant="secondary" label="Click Here" />
      </Box>
    </Box>
  );
};

export default Home;
