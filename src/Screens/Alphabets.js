import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import closeButton from '../../assets/buttons/05-closeButton.png';

export default Alphabets = (props) => {

    createTouchable = (key, farsiAlphabets, textStyle, containerStyle) => {
        return (
        <TouchableOpacity key={key + "Touchable"} onPress={() => { props.closeButtonAction(key) }}>
            <View style={containerStyle} key={key + "Container"}>
                <Text style={textStyle} key={key}>{farsiAlphabets[key]}</Text>
            </View>
        </TouchableOpacity>)
    }

    printAlphabets = (farsiAlphabets, textStyle, containerStyle) =>{
        const allKeys = Object.keys(farsiAlphabets)
        restultArray = [];
        
        for(var i = 0; i < allKeys.length; i++){
                restultArray.push(
                    createTouchable(allKeys[i], farsiAlphabets, textStyle, containerStyle)
                );
        }
        
        return restultArray;
    }

    return(
        <View style={props.containerStyle}>
            <View style={props.topContainer}>
                <TouchableOpacity onPress={() => {props.closeButtonAction('welcome')}}>
                    <Image
                        source={closeButton}
                        style={props.closeButtonStyle}
                    />
                </TouchableOpacity>
            </View>

            <View style={props.midContainer}>
                {printAlphabets(props.farsiAlphabet, props.letterStyle, props.letterContainerStyle)}
            </View>

        </View>
    );
}
