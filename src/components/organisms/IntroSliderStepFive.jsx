import React from "react";
import { Image, StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "@theme/colors";
import Button from "../atoms/Button";

const competitions = [
    {
        id: 1,
        name: "Primeira Liga",
        country: "Portugal",
        image: require("@assets/images/sliderScreen/competition-4.png"),
    },
    {
        id: 2,
        name: "Eredivisie",
        country: "Germany",
        image: require("@assets/images/sliderScreen/competition-1.png"),
    },
    {
        id: 3,
        name: "La Liga",
        country: "Italy",
        image: require("@assets/images/sliderScreen/competition-3.png"),
    },
    {
        id: 4,
        name: "Ligue 1",
        country: "Netherlands",
        image: require("@assets/images/sliderScreen/competition-2.png"),
    },
];

const CompetitionCard = ({ name, country, image }) => {
    return (
        <View style={styles.card}>
            {/* Competition Image */}
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.cardImage} />
            </View>

            {/* Competition Details */}
            <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardSubtitle}>{country}</Text>
            </View>

            {/* Favorite Icon */}
            <TouchableOpacity style={styles.favoriteIcon}>
                <Icon name="star-o" size={16} color="rgba(255, 255, 255, 0.5)" />
            </TouchableOpacity>
        </View>
    );
};
export const IntroSliderStepFive = () => {
    return (
        <>
            <Text style={styles.title}>Favorite Competitions</Text>
            <Text style={styles.subtitle}>Receive notifications about matches of your favorite competitions.</Text>

            {/* Search Box */}
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchBox} placeholder="Search Competitions" placeholderTextColor={colors.black} />
            </View>

            {/* Competition Cards */}
            <FlatList
                data={competitions}
                renderItem={({ item }) => (
                    <CompetitionCard name={item.name} country={item.country} image={item.image} />
                )}
                keyExtractor={(item) => item.id.toString()}
                
                contentContainerStyle={styles.competitionList}
            />

            <Button
                title="View More ▼"
                onPress={() => {}}
                size="large"
                variant={"outline"}
                style={{ borderColor: "#262628" }} 
                textStyle={{ color: colors.text }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginTop: 5,
    },
    subtitle: {
        fontSize: 16,
        color: "#aaa",
        textAlign: "center",
        marginBottom: 10,
    },
    searchContainer: {
        width: "100%",
        alignSelf: "center",
    },
    searchBox: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        color: "#000",
        fontSize: 16,
    },
    competitionList: {
        justifyContent: "center",
        paddingHorizontal: 0,
        marginVertical: 10,
        width: "100%",
    },
    card: {
        flexDirection: "row",  // Horizontal layout
        backgroundColor: "#2C2C2E",
        marginVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        padding: 15,
        position: "relative",
        height: 80,  // Adjust the height as per your design
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: "black",
        borderRadius: 25,  // Circular image
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,  // Spacing between image and text
    },
    cardImage: {
        width: "70%",
        height: "70%",
        resizeMode: "contain",  // Keep the image within the circular container
    },
    textContainer: {
        flex: 1,  // Takes up remaining space
        justifyContent: "center",
    },
    cardTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 3,
    },
    cardSubtitle: {
        color: "#aaa",
        fontSize: 14,
    },
    favoriteIcon: {
        position: "absolute",
        top: 15,
        right: 15,
        backgroundColor: "#1C1C1E",
        borderRadius: 50,
        padding: 6,
    },
    viewMoreButton: {
        backgroundColor: "#1C1C1E",
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
        marginHorizontal: "30%",
        marginVertical: 15,
    },
    viewMoreText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default IntroSliderStepFive;
