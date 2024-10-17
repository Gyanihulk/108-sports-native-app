// components/PredictionInterestStep.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePredictionInterest } from "@stores/formSlice";
import SelectionCard from "@components/atoms/SelectionCard"; 

const PredictionInterestStep = ({ onNext }) => {
    const dispatch = useDispatch();
    const [selectedPrediction, setSelectedPrediction] = useState("");

    const predictionOptions = [
        { label: "Match Winner", value: "Match Winner", image: require("@assets/images/logo.png") },
        { label: "Double Chance", value: "Double Chance", image: require("@assets/images/logo.png") },
        { label: "Both Teams Score", value: "Both Teams Score", image: require("@assets/images/logo.png") },
        { label: "Goals Over/Under", value: "Goals Over/Under", image: require("@assets/images/logo.png") },
        { label: "Other", value: "Other", image: require("@assets/images/logo.png") },
    ];

    const handleSelect = (value) => {
        setSelectedPrediction(value);
        dispatch(updatePredictionInterest(value));
        onNext(); 
    };

    return (
        <SelectionCard
            title="What Type of Predictions Are You Interested In?"
            options={predictionOptions}
            selectedOption={selectedPrediction}
            onSelect={handleSelect}
            type="withImage" 
        />
    );
};

export default PredictionInterestStep;
