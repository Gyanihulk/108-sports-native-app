import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function TextFields({
    placeholderValue,
    secureTextEntry,
    inputMode,
    value,
    onChangeText,
    keyboardType = "default",
    styles,
}) {
    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={`${placeholderValue}`}
            secureTextEntry={secureTextEntry}
            inputMode={`${inputMode}`}
            style={styles}
            placeholderTextColor={"#FFFFFF"}
            keyboardType={`${keyboardType}`}
        />
    );
}

// const styles = StyleSheet.create({
//     textFieldSize: {
//         color: "#FFFFFF",
//         height: 50,
//         borderRadius: 10,
//         backgroundColor: "#262628",
//         paddingLeft: 8,
//     },
// });
