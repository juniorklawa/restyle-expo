import {
  SpacingProps,
  VariantProps,
  createRestyleComponent,
  createText,
  createVariant,
  spacing,
} from "@shopify/restyle";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ThemeProps } from "../theme";

const Text = createText<ThemeProps>();

type BoxCustomProps = SpacingProps<ThemeProps> &
  VariantProps<ThemeProps, "buttonVariants">;

const Box = createRestyleComponent<BoxCustomProps, ThemeProps>([
  spacing,
  createVariant({ themeKey: "buttonVariants" }),
]);

type Props = BoxCustomProps & {
  label: string;
};

const GenericButton = (props: Props) => {
  return (
    <TouchableOpacity>
      <Box {...props}>
        <Text
          variant={
            props.variant === "primary" ? "buttonPrimary" : "buttonSecondary"
          }
        >
          {props.label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default GenericButton;
