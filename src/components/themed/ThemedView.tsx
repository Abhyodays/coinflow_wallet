import { View, ViewProps } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

const ThemedView = ({ style, children, ...props }: ViewProps) => {
    const { theme } = useTheme();
    const backgroundColor = theme.colors.background.primary;
    return (
        <View style={[{ backgroundColor }, style]} {...props}>{children}</View>
    )
}

export default ThemedView;