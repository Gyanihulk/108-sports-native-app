import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "@screens/auth/LoginScreen";
import RegisterScreen from "@screens/auth/RegisterScreen";
import SplashScreen from "@screens/auth/SplashScreen";
import { IntroSliderScreen } from "@screens/auth/IntroSliderScreen";
import ForgotPasswordScreen from "../../screens/auth/ForgotPasswordScreen";
import OtpVerificationScreen from "../../screens/auth/OtpVerificationScreen";
import CreateNewPasswordScreen from "../../screens/auth/CreateNewPasswordScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Slider" component={IntroSliderScreen} /> */}
            {/* <Stack.Screen name="Welcome" component={SplashScreen} /> */}
            {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
            {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
            {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}
            {/* <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} /> */}
            <Stack.Screen name="NewPassword" component={CreateNewPasswordScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;
