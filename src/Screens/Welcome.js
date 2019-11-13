import React from 'react';
import {Image, View, TouchableOpacity} from "react-native"

export default Welcome = (props) => {
    return(
        <View style={props.containerStyle}>

            <TouchableOpacity onPress={() => { props.lessonButtonAction('alphabet') }}>
                <Image
                    source={require("../../assets/buttons/02-dars.png")}
                    style={props.imageStyle}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { props.quizButtonAction()}}>
                <Image
                    source={require("../../assets/buttons/04-imtehan.png")}
                    style={props.imageStyle}
                />
            </TouchableOpacity>
            
        </View>
    );
}