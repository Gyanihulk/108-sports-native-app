// components/DailyBudgetStep.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { updateDailyBudget } from "@stores/formSlice";

const DailyBudgetStep = ({ onNext }) => {
    const dispatch = useDispatch();

    const handleSelect = (budget) => {
        dispatch(updateDailyBudget(budget));
        onNext(); // Automatically move to the next step after budget selection
    };

    return (
        <View>
            <Text>What is Your Daily Budget?</Text>
            <Button title="Up to $100" onPress={() => handleSelect(100)} />
            <Button title="$100 - $500" onPress={() => handleSelect(500)} />
            <Button title="$500 - $1000" onPress={() => handleSelect(1000)} />
            <Button title="More than $1000" onPress={() => handleSelect(1001)} />
        </View>
    );
};

export default DailyBudgetStep;
