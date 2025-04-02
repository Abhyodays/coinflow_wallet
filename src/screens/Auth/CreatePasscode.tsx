import { Text, View } from "react-native"
import PasscodeScreen from "../../components/PasscodeScreen";
const CreatePasscode = () => {
    return (
        <PasscodeScreen
            title="Create passcode"
            subtitle="Enter your passcode. Be sure to remember it so you can unlock your wallet."
        />
    )

}

export default CreatePasscode;