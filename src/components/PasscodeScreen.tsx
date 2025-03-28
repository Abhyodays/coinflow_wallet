import { StyleSheet, Text, View } from "react-native";
import ThemedView from "./themed/ThemedView";
import ThemedText from "./themed/ThemedText";

type PropType = {
    title: string;
    subtitle?: string;
}

const PasscodeScreen = () => {
    return (
        <ThemedView style={styles.container}>
            <View>
                <ThemedText>Enter passcode</ThemedText>

            </View>
        </ThemedView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    title: {
        fontSize: 24
    }
})
export default PasscodeScreen;