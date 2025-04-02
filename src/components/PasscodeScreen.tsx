import { StyleSheet, View } from "react-native";
import ThemedView from "./themed/ThemedView";
import ThemedText from "./themed/ThemedText";
import InputSquare from "./InputSquare";
import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import CustomKeyboard from "./CustomKeyboard";
import { useAuth } from "../contexts/AuthContext";

type PasscodeScreenPropType = {
    title: string;
    subtitle?: string;
}

const PasscodeScreen = ({ title, subtitle }: PasscodeScreenPropType) => {
    const { theme } = useTheme();
    const { authenticate, user } = useAuth();
    const savedCode = "000000";
    const [code, setCode] = useState('');
    const handleKeyPress = (value: string) => {
        if (value === 'x') {
            const newCode = code.slice(0, code.length - 1);
            setCode(newCode);
            return;
        }
        if (code.length >= 6) return;
        if (value === "#") return;
        const newCode = code + value;
        setCode(newCode);
    }
    return (
        <ThemedView style={styles.container}>
            <View style={styles.inner_container}>
                <ThemedText style={styles.title}>{title}</ThemedText>
                <View style={styles.input_container}>
                    {
                        Array.from({ length: 6 }, (_, index) => (
                            <InputSquare key={index} active={index < code.length} success={!!user} />
                        ))
                    }
                </View>
                <ThemedText style={[styles.subtitle, { color: theme.colors.text.secondary }]}>{subtitle}</ThemedText>
                <View style={styles.keyboard_container}>
                    <CustomKeyboard onPress={handleKeyPress} />
                </View>
            </View>
        </ThemedView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    inner_container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: 'Poppins-SemiBold'
    },
    input_container: {
        flexDirection: 'row',
        gap: 20
    },
    dummy_input: {
        backgroundColor: 'white',
        width: 200,
        marginBottom: 10,
        color: 'black'
    },
    subtitle: {
        textAlign: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 16
    },
    keyboard_container: {
        marginTop: 150,
        marginBottom: 20
    }
})
export default PasscodeScreen;
