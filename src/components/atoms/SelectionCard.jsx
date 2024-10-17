import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"; 
import { colors } from "@theme/colors";
import { horizontalScale, verticalScale } from "@utils/DimenstionHelpers";
import { moderateScale } from "../../utils/DimenstionHelpers";

const SelectionCard = ({ title, options, selectedOption, onSelect, type, cardVariant }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.optionsContainer}>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.value}
                        style={[
                            styles.option,
                            selectedOption === option.value && styles.selectedOption,
                            cardVariant === "fullLength" && styles.fullLengthOption, 
                        ]}
                        onPress={() => onSelect(option.value)}
                    >
                        {type === "withImage" && option.image && (
                            <Image source={option.image} style={styles.optionImage} />
                        )}
                        <Text style={styles.optionText}>{option.label}</Text>
                        {cardVariant === "fullLength" && (
                            <View style={styles.iconContainer}>
                                <Icon
                                    name="arrowright"
                                    size={16}
                                    color={selectedOption === option.value ? "#0AD54A" : "rgba(255, 255, 255, 0.5)"}
                                    style={styles.icon}
                                />
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.darkGray,
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        alignItems:"center"
    },
    title: {
        color: colors.text,
        fontSize: moderateScale(22),
        fontWeight: "bold",
        marginBottom: 10,
        textAlign:"center"
    },
    optionsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    option: {
        backgroundColor: colors.backgroundDark,
        padding: 7,
        borderRadius: 8,
        marginBottom: 10,
        width: "48%", 
        alignItems: "center",
        justifyContent: "space-between", 
        flexDirection: "row", 
    },
    fullLengthOption: {
        width: "100%", 
    },
    selectedOption: {
        borderColor: colors.primaryGreen,
        borderWidth: 1,
    },
    optionText: {
        color: colors.text,
        fontSize: moderateScale(14),
        paddingLeft:13
    },
    optionImage: {
        width:horizontalScale(40),
        height: verticalScale(40),
        marginBottom: 5,
    },
    iconContainer: {
        backgroundColor: colors.darkGray, 
        borderRadius: 20, 
        padding: 8, 
        alignItems: "center",
        justifyContent: "center",
        transform: [{ rotate: "-45deg" }],
    },
});

export default SelectionCard;
