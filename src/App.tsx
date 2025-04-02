import { Button, Text, View } from "react-native";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Router from "./router/Router";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <Router />
            </ThemeProvider>
        </AuthProvider>
    )
}

export default App;