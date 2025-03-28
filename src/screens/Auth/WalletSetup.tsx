import { StyleSheet, Text, View } from "react-native"
import ThemedView from "../../components/themed/ThemedView";
import ThemedText from "../../components/themed/ThemedText";

const WalletSetup = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText>Wallet setup</ThemedText>
        </ThemedView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default WalletSetup;