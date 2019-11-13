import React from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import {Video} from 'expo-av';

// Assets
import farsiAlphabet from "../../assets/jsons/alphabetFarsi.json"

const closeButton = require('../../assets/buttons/05-closeButton.png');

export default Quiz = (props) => {

    playVideo = (source) => {

        playAsyncVideo = async (playbackObject) => {
            try {
                let path = source;
                let stillFish = props.stillFish;
                await playbackObject.loadAsync(path, initialStatus = {}, downloadFirst = true)
                await playbackObject
                    .playAsync()
                    .then(async playbackStatus => {
                        console.log(playbackStatus.didJustFinish)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            } catch (error) {
                console.log(error)
            }
        }

        return (
            <Video
                source={props.stillFish}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                shouldPlay
                downloadFirst
                ref={this.playAsyncVideo}
                isLooping={false}
                style={{ width: Dimensions.get('window')["width"]/2, height: Dimensions.get('window')['height']/4 }}
            />
        )
    }

    displayOptions = (quizOptionsArray, correctOptionKey) =>{
        //correctOptionKey: "Aliph",
        //quizOptionArray: ['Aliph', 'Bey', 'Pey'],
        // console.log(quizOptionsArray);
        // console.log(correctOptionKey);
        var result = [];
        var wordsUsed = []

        for(var i = 0; i < quizOptionsArray.length; i++){
            if (quizOptionsArray[i] === correctOptionKey) {
                result.push(
                    <TouchableOpacity key={i} onPress={() => { props.textAction("afarin") }}>
                        <Text style={props.textStyle}>{farsiAlphabet[quizOptionsArray[i]]}</Text>
                    </TouchableOpacity>
                )
            } else if(quizOptionsArray[i] !== correctOptionKey && wordsUsed.length === 0){
                result.push(
                    <TouchableOpacity key={i} onPress={() => { props.textAction("ahum")}}>
                        <Text style={props.textStyle}>{farsiAlphabet[quizOptionsArray[i]]}</Text>
                    </TouchableOpacity>
                )
                wordsUsed.push("ahum")
            } else {
                result.push(
                    <TouchableOpacity key={i} onPress={() => { props.textAction("differentWord") }}>
                        <Text style={props.textStyle}>{farsiAlphabet[quizOptionsArray[i]]}</Text>
                    </TouchableOpacity>
                )
            }
        }
        return result;
    }

    return(
        <View style={props.containerStyle}>
            
            <View style={props.topStyle}>
                <TouchableOpacity onPress={() => { props.closeButtonAction("welcome") }}>
                    <Image
                        source={closeButton}
                        style={props.closeButtonStyle}
                    />
                </TouchableOpacity>
            </View>

            <View style={props.fishStyle}>
                {playVideo(props.quizVideo)}
            </View>

            <View style={props.midStyle}>
                <Image 
                    source={props.displayImage} 
                    style={props.imageStyle}
                />
            </View>

            <View style={props.botStyle}>
                {displayOptions(props.quizOptions, props.correctOption, props.alphabet)}
            </View>
            
        </View>
    )
}