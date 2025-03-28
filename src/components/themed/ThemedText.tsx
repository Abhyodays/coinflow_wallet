import { StyleSheet, Text, TextProps } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

const ThemedText = ({ style, children, ...props }: TextProps) => {
    const { theme } = useTheme();
    const color = theme.colors.text.primary;
    return (
        <Text style={[{ color }, style]} {...props}>{children}</Text>
    )
}

const style = StyleSheet.create({
    text: {
        fontFamily: 'Poppins-Normal'
    }
})

export default ThemedText;