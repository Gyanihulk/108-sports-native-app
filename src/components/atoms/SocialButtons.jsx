import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const SocialButton = ({ icon, onPress }) => {
    const iconSource = {
        // facebook: require("./assets/facebook.png"),
        // google: require("./assets/google.png"),
        // apple: require("./assets/apple.png"),
    };

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image source={iconSource[icon]} style={styles.icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: "#222",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        width: 30,
        height: 30,
    },
});

export default SocialButton;
