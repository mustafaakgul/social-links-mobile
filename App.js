const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import MobileDarkMode from "./screens/MobileDarkMode";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
    const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

    const [fontsLoaded, error] = useFonts({
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    });

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <>
            <NavigationContainer>
                {hideSplashScreen ? (
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="MobileDarkMode"
                            component={MobileDarkMode}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                ) : null}
            </NavigationContainer>
        </>
    );
};
export default App;
