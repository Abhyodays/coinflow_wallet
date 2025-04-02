import { StyleSheet, View } from "react-native"
import KeyboardButton from "./KeyboardButton"
import ThemedView from "./themed/ThemedView"

type CustomKeyboardPropType = {
    onPress?: (digit: string) => void
}
const CustomKeyboard = ({ onPress }: CustomKeyboardPropType) => {
    return (
        <View style={styles.container}>
            {
                Array.from({ length: 9 },
                    (e, index) => (
                        <KeyboardButton
                            key={index}
                            value={`${index + 1}`}
                            onPress={() => {
                                onPress && onPress(`${index + 1}`)
                            }}
                        />
                    ))
            }
            <KeyboardButton value="#" onPress={() => onPress && onPress('#')} />
            <KeyboardButton value="0" onPress={() => onPress && onPress('0')} />
            <KeyboardButton value="x" onPress={() => onPress && onPress('x')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CustomKeyboard;