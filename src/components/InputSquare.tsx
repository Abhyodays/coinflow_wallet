import { Dimensions, StyleSheet, Text, View } from "react-native"
import { lightTheme } from "../constants/colors"
import { Icon } from "react-native-paper"
import { useTheme } from "../contexts/ThemeContext"

type InputSquarePropType = {
    active: boolean,
    success?: boolean,
    error?: boolean
}

const InputSquare = ({ active, success }: InputSquarePropType) => {
    const { theme } = useTheme();
    return (
        <View style={
            [
                styles.container,
                { borderColor: theme.colors.text.secondary },
                success && styles.success
            ]
        }>
            {active &&
                <Icon source='circle' size={20} color="white" />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1.5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: Math.floor(Dimensions.get('screen').width / 9),
        height: Math.floor(Dimensions.get('screen').width / 9) + 5,
    },
    success: {
        borderWidth: 2,
        borderColor: lightTheme.colors.selection,
    }
})

export default InputSquare;