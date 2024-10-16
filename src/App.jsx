import React from "react";

import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native";

import Navigation from "@navigation";
import { ThemeProvider } from "@rneui/themed";
import { theme as appTheme } from "@theme/theme";

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <Navigation />
        </ThemeProvider>
    );
}

export default App;
