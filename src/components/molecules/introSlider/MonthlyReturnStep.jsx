// components/MonthlyReturnStep.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";
import { updateMonthlyReturn } from "@stores/formSlice";

const MonthlyReturnStep = ({ onNext }) => {
    const dispatch = useDispatch();

    const handleSelect = (monthlyReturn) => {
        dispatch(updateMonthlyReturn(monthlyReturn));
        onNext(); 
    };

    return (
        <View>
            <Text>What is Your Monthly Return Target?</Text>
            <Button title="Up to $500" onPress={() => handleSelect(500)} />
            <Button title="$500 - $1000" onPress={() => handleSelect(1000)} />
            <Button title="$1000 - $5000" onPress={() => handleSelect(5000)} />
            <Button title="More than $5000" onPress={() => handleSelect(5001)} />
        </View>
    );
};

export default MonthlyReturnStep;
