import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Icon } from "react-native-paper"

type KeyboardButtonPropType = {
    value: string,
    onPress?: () => void
}

const KeyboardButton = ({ onPress, value }: KeyboardButtonPropType) => {
    if (value === '#') {
        return (
            <TouchableOpacity onPress={onPress} style={styles.container}
                activeOpacity={0.5}>
                <View>
                    <Icon source='fingerprint' size={50} color="white" />
                </View>
            </TouchableOpacity>
        )
    }
    if (value === 'x') {
        return (
            <TouchableOpacity onPress={onPress} style={styles.container}
                activeOpacity={0.5}>
                <View>
                    <Icon source='backspace-outline' size={30} color="white" />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}
            activeOpacity={0.5}>
            <View>
                <Text style={styles.button_text}>{value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: Math.floor(Dimensions.get('screen').width / 3)

    },
    button_text: {
        fontSize: 28,
        fontFamily: 'Poppins-SemiBold'
    }
})

export default KeyboardButton;