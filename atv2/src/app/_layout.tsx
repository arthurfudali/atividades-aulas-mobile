import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout(){
    const [loaded] = useFonts({
    'Space-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
    'JetBrains-Regular': require('@/assets/fonts/JetBrainsMono-Regular.ttf'),
    'JetBrains-Medium': require('@/assets/fonts/JetBrainsMono-Medium.ttf'),
  });


    return (
        <>
        <StatusBar style='auto' />
        <Stack initialRouteName="(tabs)">
            {/* <Stack.Screen name="onboarding" options={{ headerShown: false }} /> */}
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        </>
    )
}
