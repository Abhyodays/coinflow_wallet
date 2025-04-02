import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from "react-native"
import { Button } from 'react-native-paper'
import { darkTheme, lightTheme } from "../../constants/colors";
import OnboardingPoster from '../../../assets/images/onboarding_poster.png';
import { useTheme } from "../../contexts/ThemeContext";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../router/AuthStack";
import LottieView from "lottie-react-native";
import OnboardingLottie from '../../../assets/lotties/onboarding_lottie.json'



const Onboarding = () => {
    const { theme } = useTheme();
    const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>()
    const handleCreateWallet = () => {
        console.log("go to createWallet")
        navigation.navigate('CreatePasscode');
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={darkTheme.colors.background.primary} barStyle="light-content" />
            <View style={styles.poster_container}>
                <LottieView source={OnboardingLottie}
                    style={styles.poster}
                    loop
                    autoPlay />
                <Text style={[styles.onboarding_text]}>
                    Own, control and Leverage the power of your digital assets
                </Text>
            </View>
            <View style={styles.button_container}>
                <Button
                    style={[styles.button, styles.create_button]}
                    labelStyle={[styles.text, styles.button_text, styles.create_button_text]}
                    onPress={handleCreateWallet}
                >
                    Create new wallet
                </Button>
                <Button
                    style={[styles.button]}
                    labelStyle={[styles.text, styles.button_text, styles.existing_button_text]}
                >
                    I already have a wallet
                </Button>
                <Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: darkTheme.colors.background.primary
    },
    poster_container: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    poster: {
        width: Dimensions.get('screen').width,
        height: '100%'
    },
    onboarding_text: {
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
        width: 300,
        color: darkTheme.colors.text.primary,
        position: 'absolute',
        bottom: 50
    },
    button_container: {
        flex: 2,
        gap: 10
    },
    button: {
        paddingVertical: 10,
        borderRadius: 50,
        width: Dimensions.get('screen').width - 60
    },
    create_button: {
        backgroundColor: lightTheme.colors.selection
    },
    existing_button: {
        backgroundColor: darkTheme.colors.background.secondary
    },
    text: {
        fontWeight: '500',
        fontFamily: 'Poppins-Regular'
    },
    button_text: {
        fontSize: 18,
    },
    create_button_text: {
        color: lightTheme.colors.text.primary
    },
    existing_button_text: {
        color: darkTheme.colors.text.primary
    }
})

export default Onboarding;