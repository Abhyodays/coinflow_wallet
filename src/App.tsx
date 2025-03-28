import { Button, Text, View } from "react-native";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Router from "./router/Router";

function App() {
    return (
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    )
}

export default App;