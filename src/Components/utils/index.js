import { Platform, Text, useColorScheme } from "react-native";
import React from "react";
import { COLORS } from "../../constants/theme";
// import { COLORS } from "../../../constants/theme";

export const Txt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
  opacity,
  Bold,
  onTextLayout,
  textTransform
}) => {
  const colorScheme = useColorScheme();

  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      onTextLayout={onTextLayout}
      style={{
        fontSize: fontSize || 14,
        // fontFamily: fontFamily || "Helvetica",
        fontFamily: Platform.OS == "ios"? undefined: "Helvetica",
        color:  color|| colorScheme == 'dark' ? COLORS.black : COLORS.Vert1 ,
        fontWeight: Bold || "400",
        opacity: opacity || 1,
        textTransform:textTransform?textTransform: 'none',
        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export const Head = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
  opacity,
  Bold,
  onTextLayout,
  lineHeight,
}) => {
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      onTextLayout={onTextLayout}
      style={{
        fontSize: fontSize || 18,
        // fontFamily: fontFamily || "Helvetica",
        fontFamily: Platform.OS == "ios"? undefined: "Helvetica",

        color: color || COLORS.blueGreen,
        fontWeight: Bold || "400",
        opacity: opacity || 1,

        ...style,
      }}
    >
      {children}
    </Text>
  );
};

export const SmTxt = ({
  fontSize,
  numberOfLines,
  fontFamily,
  color,
  children,
  style,
  opacity,
  Bold,
  onTextLayout,
}) => {
  return (
    <Text
      selectable={false}
      numberOfLines={numberOfLines}
      onTextLayout={onTextLayout}
      style={{
        fontSize: fontSize || 14,
        // fontFamily: fontFamily || "Helvetica",
        fontFamily: Platform.OS == "ios"? undefined: "Helvetica",
        color: color || COLORS.Vert1,
        fontWeight: Bold || "400",
        opacity: opacity || 1,
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
