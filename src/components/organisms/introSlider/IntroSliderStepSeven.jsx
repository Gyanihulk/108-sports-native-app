import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MatchesPerDay from "@components/molecules/introSlider/MatchesPerDay";
import ExperienceLevelStep from "@components/molecules/introSlider/ExperienceLevelStep";
import PredictionInterestStep from "@components/molecules/introSlider/PredictionInterestStep";
import DailyBudgetStep from "@components/molecules/introSlider/DailyBudgetStep";
import MonthlyReturnStep from "@components/molecules/introSlider/MonthlyReturnStep";
import { useSelector } from "react-redux";
import Button from "@components/atoms/Button";
import InfoModal from "@components/atoms/InfoModal";
import { styles as baseStyles } from "@components/organisms/introSlider/styles";
const IntroSliderStepSeven = () => {
    const [step, setStep] = useState(1);
    const [isModalVisible, setModalVisible] = useState(false); // Modal visibility
    const { experienceLevel, predictionInterest, dailyBudget, monthlyReturn } = useSelector((state) => state.form);

    const handleNextStep = () => {
        setModalVisible(true); // Show modal when step is completed
    };

    const handleModalNext = () => {
        setModalVisible(false); // Close the modal
        if (step < 3) {
            setStep(step + 1); // Proceed to next step
        } else {
            // Submit the form when the last step is completed
            const formData = {
                experienceLevel,
                predictionInterest,
                dailyBudget,
                monthlyReturn,
            };
            // API call
            console.log("Submitting form data:", formData);
        }
    };

    const getModalContent = () => {
        switch (step) {
            case 0:
                return {
                    title: "What is Your Experience Level?",
                    heading: "Great!",
                    description: "You have selected your experience level. Let's move forward with your journey.",
                    image: require("@assets/images/sliderScreen/tick.png"), // Replace with your actual image path
                };
            case 1:
                return {
                    title: "How Many Matches Do You Process Per Day",
                    heading: "Done!",
                    description: "You have selected your Number of Matches. Let's continue!",
                    image: require("@assets/images/sliderScreen/thumb_up.png"), // Replace with your actual image path
                };
            case 2:
                return {
                    title: "What is Your Daily Budget?",
                    heading: "Perfect!",
                    description: "You have selected your daily budget. Let's proceed to the next step.",
                    image: require("@assets/images/sliderScreen/tick.png"), // Replace with your actual image path
                };
            case 3:
                return {
                    title: "What is Your Monthly Return Target?",
                    heading: "Excellent!",
                    description: "You have selected your monthly return target. Now you are all set!",
                    image: require("@assets/images/sliderScreen/tick.png"), // Replace with your actual image path
                };
            default:
                return {};
        }
    };

    const renderStep = () => {
        switch (step) {
            case 0:
                return <ExperienceLevelStep onNext={handleNextStep} />;
            case 1:
                return <MatchesPerDay onNext={handleNextStep} />;
            case 2:
                return <PredictionInterestStep onNext={handleNextStep} />;

            case 4:
                return <DailyBudgetStep onNext={handleNextStep} />;
            case 5:
                return <MonthlyReturnStep onNext={handleNextStep} />;
            default:
                return <Text>All steps completed!</Text>;
        }
    };

    const modalContent = getModalContent();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Personal Advisor</Text>
            <Text style={styles.subtitle}>
                The advisor will help you choose the right strategy with AI Football predictions
            </Text>
            {renderStep()}
            <InfoModal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                title={modalContent.title}
                heading={modalContent.heading}
                image={modalContent.image}
                description={modalContent.description}
                onNext={handleModalNext}
            />
            <Button title="Next" onPress={handleNextStep} size="large" textStyle={{ color: "black" }} />
        </View>
    );
};
const styles = StyleSheet.create({
    ...baseStyles,
});
export default IntroSliderStepSeven;
