import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
    const { iconName, iconColor, bodyText,bodyTextStyles,alignRow } = props;
    const { textTheme,container } = styles;
    return (
        <View style={container}>
            <Feather name={iconName} size={50} colo={iconColor} />
            <Text style={[bodyTextStyles, textTheme]}>{bodyText}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    textTheme:{
        fontWeight:'bold'
    },
    container:{
        alignItems:'center'
    }
});

export default IconText;