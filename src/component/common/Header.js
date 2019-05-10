//Import library for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>
                {props.children}
            </Text>
        </View>

    );
};
const styles = {
    textStyle: {
        fontSize: 20,

    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        height: 60,
        alignItems: 'center',
        paddingTop: 15,
        shadowOffset: { width: 10, height: 10, },
        shadowColor: 'red',
        shadowOpacity: 1.0,
        elevation: 2,
        position: 'relative'
    }
};
// Make the component avilable to other aprts of the app
export { Header };
