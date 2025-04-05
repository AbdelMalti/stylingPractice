import { Text, TextStyle, View, ViewStyle } from 'react-native';
import Button from './button';

type BoxProp = {
    color?: string;
    label: string;
    styleBox: ViewStyle;
    styleText: TextStyle;
    styleButton: ViewStyle;
}

const Box = (props: BoxProp): React.JSX.Element => {

    return(
        <View style={ [ props.styleBox, { backgroundColor: props.color ? props.color : props.styleBox.backgroundColor } ] }>
            <Text style={props.styleText}>{props.label}</Text>
            <View style={props.styleButton}>
                <Button buttonContent="✅"/>
                <Button buttonContent="❌"/>
            </View>
        </View>
    );
};

export default Box;
