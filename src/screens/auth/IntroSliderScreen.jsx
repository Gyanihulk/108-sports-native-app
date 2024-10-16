import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressBar from "@components/molecules/ProgressBar";
import Button from "@components/atoms/Button";

import { IntroSliderStepOne } from "@components/organisms/IntroSliderStepOne";
import { IntroSliderStepTwo } from "@components/organisms/IntroSliderStepTwo";
import { IntroSliderStepThree } from "@components/organisms/IntroSliderStepThree";
import { IntroSliderStepFour } from "@components/organisms/IntroSliderStepFour";
import { IntroSliderStepFive } from "../../components/organisms/IntroSliderStepFive";


export const IntroSliderScreen = () => {
    const [currentStep, setCurrentStep] = useState(4);

    const handleNextStep = () => {
        if (currentStep < 7) {
            setCurrentStep(currentStep + 1);
        }
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return <IntroSliderStepOne />;
            case 2:
                return <IntroSliderStepTwo />;
            case 3:
                return <IntroSliderStepThree />;
            case 4:
                return <IntroSliderStepFour />;
            case 5:
      return <IntroSliderStepFive/>

            default:
                return <IntroSliderStepOne />;
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <ProgressBar currentStep={currentStep} totalSteps={7} />

            {renderCurrentStep()}
            <Button title="Next" onPress={handleNextStep} size="large" textStyle={{ color: "black" }} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
        backgroundColor: "#000",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#aaa",
        textAlign: "center",
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "contain",
        marginVertical: 20,
    },
    smallBoxContainer: {
        position: "absolute",
        top: "40%", // Adjust this to position the boxes correctly over the image
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-around",
    },
});
