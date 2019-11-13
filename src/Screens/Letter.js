import React from "react";
import {Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import {Video} from 'expo-av';

const closeButton = require('../../assets/buttons/05-closeButton.png');
const idleFish = require('../../assets/cartoon/01-welcomeFish.gif');

// why didnt plain image address work here? why did i have to put the address in sstate and then pass it here as a prop

export default letter = (props) => {
    playVideo = (source) => {
        const win = Dimensions.get('window')
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
                style={{width: win['width']/2.5, height: win['height']/5, marginTop: 10 }}
            />
        )
    }

    return(
        <View style = {props.containerStyle}>
            <View style={props.closeContainerStyle}>
                <TouchableOpacity onPress={() => {props.closeButtonAction('alphabet')}}>
                    <Image 
                        source={closeButton}
                        style={props.closeButtonStyle}
                    />
                </TouchableOpacity>
            </View>

            <View style={props.letterContainerSytle}>
                <TouchableOpacity onPress={() => {props.changeVideo(props.name)}}>
                    <Text style={props.letterStyle}>{props.letter}</Text>
                </TouchableOpacity>
            </View>

            <View style={props.imageContainerStyle}>
                <TouchableOpacity onPress={()=> {props.imageAction(props.name)}}>
                    <Image style={props.imageStyle} source={props.imageName}/>
                </TouchableOpacity>
            </View>

            <View style={props.cartoonContainerStyle}>
                {playVideo(props.videoSource)}
            </View>
        </View>
    )
}