import React from 'react'
import { View, TextInput, Text } from 'react-native'



const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle ,containerStyle ,lableStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={lableStyle}>{label}</Text>
            <TextInput
                value={value}
                style={inputStyle}
                onChangeText={onChangeText}
                placeholder={placeholder}
                autoCorrect={false}
                secureTextEntry = {secureTextEntry}
            />
        </View>
    )
}
const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize : 18,
        lineHeight : 23,
        flex : 2,
        height: 50,
         width: 400 

    },
    containerStyle: {
       height:40,
       flex: 1,
       flexDirection: 'row',
       alignItems: 'center', 
        },
    lableStyle: {
        fontSize : 18,
        paddingLeft: 20,
        flex : 1
    }
}
export { Input };