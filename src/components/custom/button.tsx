import { Text, TouchableOpacity, View } from 'react-native';

type ButtonProp = {
    buttonContent: string
}

const Button = (props: ButtonProp): React.JSX.Element => {
    return(
        <View>
            <TouchableOpacity>
                <Text>{props.buttonContent}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

//✅❌
