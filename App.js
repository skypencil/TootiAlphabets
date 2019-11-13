import React, {Component} from 'react';
import { StyleSheet, Dimensions, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { Audio, Video } from 'expo-av'

//Components
import Letter from './src/Screens/Letter';
import Welcome from './src/Screens/Welcome';
import Alphabets from './src/Screens/Alphabets';
import Quiz from './src/Screens/Quiz';

//Assets
import farsiAlphabet from './assets/jsons/alphabetFarsi.json';

const win = Dimensions.get('window');

const test = (Dimensions.get('window')['width'] < 415 ? 0 : 80);

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      screen: 'welcome',
      quizScreen: "Fey",
      quizOptions: ['Aliph', 'Bey', 'Pey'],
      quizVideo: require('./assets/animatedQuiz/WhatWord.mp4'),
      currentVideo: require('./assets/AlphabetVideo/stillFish.mp4'),
      alphabetVideos:{
        IdleFish: require('./assets/AlphabetVideo/stillFish.mp4'),
        AliphMad: require('./assets/AlphabetVideo/AliphMad.mp4'),
        Aliph: require('./assets/AlphabetVideo/Aliph.mp4'),
        Bey: require('./assets/AlphabetVideo/Bey.mp4'),
        Pey: require('./assets/AlphabetVideo/Pey.mp4'),
        Tey: require('./assets/AlphabetVideo/Tey.mp4'),
        Sey: require('./assets/AlphabetVideo/Sey.mp4'),
        Jeem: require('./assets/AlphabetVideo/Jeem.mp4'),
        Chey: require('./assets/AlphabetVideo/Chey.mp4'),
        Hey: require('./assets/AlphabetVideo/Hey.mp4'),
        Khey: require('./assets/AlphabetVideo/Khey.mp4'),
        Daal: require('./assets/AlphabetVideo/Daal.mp4'),
        Zaal: require('./assets/AlphabetVideo/Zaal.mp4'),
        Rey: require('./assets/AlphabetVideo/Rey.mp4'),
        Zey: require('./assets/AlphabetVideo/Zey.mp4'),
        Zhey: require('./assets/AlphabetVideo/Zhey.mp4'),
        Seen: require('./assets/AlphabetVideo/Seen.mp4'),
        Sheen: require('./assets/AlphabetVideo/Sheen.mp4'),
        Swat: require('./assets/AlphabetVideo/Swat.mp4'),
        Dwat: require('./assets/AlphabetVideo/Dwat.mp4'),
        Toy: require('./assets/AlphabetVideo/Toy.mp4'),
        Zoy: require('./assets/AlphabetVideo/Zoy.mp4'),
        Ain: require('./assets/AlphabetVideo/Ain.mp4'),
        Ghain: require('./assets/AlphabetVideo/Ghain.mp4'),
        Fey: require('./assets/AlphabetVideo/Fey.mp4'),
        Qaaf: require('./assets/AlphabetVideo/Qaaf.mp4'),
        Kaaf: require('./assets/AlphabetVideo/Kaaf.mp4'),
        Gaaf: require('./assets/AlphabetVideo/Gaaf.mp4'),
        Laam: require('./assets/AlphabetVideo/Laam.mp4'),
        Meem: require('./assets/AlphabetVideo/Meem.mp4'),
        Noon: require('./assets/AlphabetVideo/Noon.mp4'),
        Waw: require('./assets/AlphabetVideo/Waw.mp4'),
        HeyDoCheshma: require('./assets/AlphabetVideo/HeyDoCheshma.mp4'),
        Yaa: require('./assets/AlphabetVideo/Yaa.mp4')
      },
      alphabetSounds:{
        AliphMad: require('./assets/alphabetsAudio/AliphMad.mp3'),
        Aliph: require('./assets/alphabetsAudio/Aliph.mp3'),
        Bey: require('./assets/alphabetsAudio/Bey.mp3'),
        Pey: require('./assets/alphabetsAudio/Pey.mp3'),
        Tey: require('./assets/alphabetsAudio/Tey.mp3'),
        Sey: require('./assets/alphabetsAudio/Sey.mp3'),
        Jeem: require('./assets/alphabetsAudio/Jeem.mp3'),
        Chey: require('./assets/alphabetsAudio/Chey.mp3'),
        Hey: require('./assets/alphabetsAudio/Hey.mp3'),
        Khey: require('./assets/alphabetsAudio/Khey.mp3'),
        Daal: require('./assets/alphabetsAudio/Daal.mp3'),
        Zaal: require('./assets/alphabetsAudio/Zaal.mp3'),
        Rey: require('./assets/alphabetsAudio/Rey.mp3'),
        Zey: require('./assets/alphabetsAudio/Zey.mp3'),
        Zhey: require('./assets/alphabetsAudio/Zhey.mp3'),
        Seen: require('./assets/alphabetsAudio/Seen.mp3'),
        Sheen: require('./assets/alphabetsAudio/Sheen.mp3'),
        Swat: require('./assets/alphabetsAudio/Swat.mp3'),
        Dwat: require('./assets/alphabetsAudio/Dwat.mp3'),
        Toy: require('./assets/alphabetsAudio/Toy.mp3'),
        Zoy: require('./assets/alphabetsAudio/Zoy.mp3'),
        Ain: require('./assets/alphabetsAudio/Ain.mp3'),
        Ghain: require('./assets/alphabetsAudio/Ghain.mp3'),
        Fey: require('./assets/alphabetsAudio/Fey.mp3'),
        Qaaf: require('./assets/alphabetsAudio/Qaaf.mp3'),
        Kaaf: require('./assets/alphabetsAudio/Kaaf.mp3'),
        Gaaf: require('./assets/alphabetsAudio/Gaaf.mp3'),
        Laam: require('./assets/alphabetsAudio/Laam.mp3'),
        Meem: require('./assets/alphabetsAudio/Meem.mp3'),
        Noon: require('./assets/alphabetsAudio/Noon.mp3'),
        Waw: require('./assets/alphabetsAudio/Waw.mp3'),
        HeyDoCheshma: require('./assets/alphabetsAudio/HeyGerdak.mp3'),
        Yaa: require('./assets/alphabetsAudio/Yaa.mp3')
      },
      quizVideos:{
        Afarin: require('./assets/animatedQuiz/Afarin.mp4'),
        AnotherWord: require('./assets/animatedQuiz/AnotherWord.mp4'),
        UhUm: require('./assets/animatedQuiz/UhUm.mp4'),
        WhatWord: require('./assets/animatedQuiz/WhatWord.mp4')
      },
      wordSounds: {
        AliphMad: require('./assets/wordsAudio/Aloobaloo.mp3'),
        Aliph: require('./assets/wordsAudio/Angoor.mp3'),
        Bey: require('./assets/wordsAudio/Boz.mp3'),
        Pey: require('./assets/wordsAudio/Peshak.mp3'),
        Tey: require('./assets/wordsAudio/Toap.mp3'),
        Sey: require('./assets/wordsAudio/Samar.mp3'),
        Jeem: require('./assets/wordsAudio/Jawari.mp3'),
        Chey: require('./assets/wordsAudio/Chatree.mp3'),
        Hey: require('./assets/wordsAudio/Halzoon.mp3'),
        Khey: require('./assets/wordsAudio/Khargosh.mp3'),
        Daal: require('./assets/wordsAudio/Darakht.mp3'),
        Zaal: require('./assets/wordsAudio/Zarabin.mp3'),
        Rey: require('./assets/wordsAudio/Robah.mp3'),
        Zey: require('./assets/wordsAudio/Zanboor.mp3'),
        Zhey: require('./assets/wordsAudio/Zhala.mp3'),
        Seen: require('./assets/wordsAudio/Seyb.mp3'),
        Sheen: require('./assets/wordsAudio/Shaadi.mp3'),
        Swat: require('./assets/wordsAudio/Sandoq.mp3'),
        Dwat: require('./assets/wordsAudio/Zaabet.mp3'),
        Toy: require('./assets/wordsAudio/Tooti.mp3'),
        Zoy: require('./assets/wordsAudio/Zarf.mp3'),
        Ain: require('./assets/wordsAudio/Ainak.mp3'),
        Ghain: require('./assets/wordsAudio/Ghora.mp3'),
        Fey: require('./assets/wordsAudio/Feel.mp3'),
        Qaaf: require('./assets/wordsAudio/Qaaz.mp3'),
        Kaaf: require('./assets/wordsAudio/Kadoo.mp3'),
        Gaaf: require('./assets/wordsAudio/Gaaw.mp3'),
        Laam: require('./assets/wordsAudio/Leemo.mp3'),
        Meem: require('./assets/wordsAudio/Motar.mp3'),
        Noon: require('./assets/wordsAudio/Naan.mp3'),
        Waw: require('./assets/wordsAudio/Warzeshkar.mp3'),
        HeyDoCheshma: require('./assets/wordsAudio/Hawapaima.mp3'),
        Yaa: require('./assets/wordsAudio/Yakhmalak.mp3')
      },
      images: {
        AliphMad: require('./assets/cartoon/AliphMad.png'),
        Aliph: require('./assets/cartoon/Aliph.png'),
        Bey: require('./assets/cartoon/Bey.png'),
        Pey: require('./assets/cartoon/Pey.png'),
        Tey: require('./assets/cartoon/Tey.png'),
        Sey: require('./assets/cartoon/Sey.png'),
        Jeem: require('./assets/cartoon/Jeem.png'),
        Chey: require('./assets/cartoon/Chey.png'),
        Hey: require('./assets/cartoon/Hey.png'),
        Khey: require('./assets/cartoon/Khey.png'),
        Daal: require('./assets/cartoon/Daal.png'),
        Zaal: require('./assets/cartoon/Zaal.png'),
        Rey: require('./assets/cartoon/Rey.png'),
        Zey: require('./assets/cartoon/Zey.png'),
        Zhey: require('./assets/cartoon/Zhey.png'),
        Seen: require('./assets/cartoon/Seen.png'),
        Sheen: require('./assets/cartoon/Sheen.png'),
        Swat: require('./assets/cartoon/Swat.png'),
        Dwat: require('./assets/cartoon/Dwat.png'),
        Toy: require('./assets/cartoon/Toy.png'),
        Zoy: require('./assets/cartoon/Zoy.png'),
        Ain: require('./assets/cartoon/Ain.png'),
        Ghain: require('./assets/cartoon/Ghain.png'),
        Fey: require('./assets/cartoon/Fey.png'),
        Qaaf: require('./assets/cartoon/Qaaf.png'),
        Kaaf: require('./assets/cartoon/Kaaf.png'),
        Gaaf: require('./assets/cartoon/Gaaf.png'),
        Laam: require('./assets/cartoon/Laam.png'),
        Meem: require('./assets/cartoon/Meem.png'),
        Noon: require('./assets/cartoon/Noon.png'),
        Waw: require('./assets/cartoon/Waw.png'),
        HeyDoCheshma: require('./assets/cartoon/HeyDoCheshma.png'),
        Yaa: require('./assets/cartoon/Yaa.png')
      }
    }
  }
  


  allKeys = Object.keys(farsiAlphabet);

  changeScreen = (value) => {
    this.setState({
      screen: value,
    })
  }

  playSound = async (value) => {
    const soundObject = new Audio.Sound();
    try{
      let path = this.state.wordSounds[value]
      await soundObject.loadAsync(path)
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch(error => {
          console.log(error)
        })
    } catch  (error) {
      console.log(error)
    }
  }

  changeQuizVideo = (value) => {
    if(value === "question"){
      this.setState ({quizVideo: this.state.quizVideos[WhatWord]});
    } else if (value === "ahum"){
      this.setState({quizVideo: this.state.quizVideos["UhUm"]});
    } else if (value === "differentWord") {
      this.setState({quizVideo: this.state.quizVideos["AnotherWord"]});
    } else if (value === "afarin") {
      this.setState({quizVideo: this.state.quizVideos["Afarin"]})
      setTimeout(() => {
        this.createQuiz()
      }, 1500);
    }
  }

  changeAlphabetVideo = (value) =>{
      
      this.setState({currentVideo: this.state.alphabetVideos[value]});
  }

  createQuiz = () => {
    const keys = Object.keys(farsiAlphabet)
    const arr = []

    const randomNumber = () => { return Math.floor(Math.random() * 33) + 0; }
    const correctIndexGenerator = () => { return Math.floor(Math.random() * 3) + 0; }

    for (var i = 0; arr.length < 3; i++) {
      var temp = randomNumber();
      if (arr.includes(keys[temp])) {
        continue;
      } else {
        arr.push(keys[temp]);
      }
    }

    var correctIndex = correctIndexGenerator();
    var correctOption = arr[correctIndex];
    this.setState({
      screen: "quiz",
      quizScreen: correctOption,
      quizOptions: arr,
      quizVideo: require('./assets/animatedQuiz/WhatWord.mp4'),
    })
  }



  createLetterScreen = (styles, farsiAlphabet, name) => {
    return (<Letter
      containerStyle={styles.letterCardContainer}

      closeContainerStyle={styles.letterCardCloseContainer}
      closeButtonStyle={styles.closeButton}
      closeButtonAction={this.changeScreen}

      letterContainerSytle={styles.letterCardLetterContainer}
      letter={farsiAlphabet[name]}
      letterStyle={styles.letterCardLetter}

      imageContainerStyle={styles.letterCardImageContainer}
      imageStyle={styles.letterCardImageStyle}
      imageName={this.state.images[name]}
      imageAction={this.playSound}
      name={name}

      cartoonContainerStyle={styles.letterCardCartoonContainer}
      videoSource={this.state.alphabetVideos[name]}
      stillFish={this.state.alphabetVideos["IdleFish"]}
      changeVideo={this.changeAlphabetVideo}
      cartoonStyle={styles.letterCardCartoon}
    />)
  }

  createWelcomeScreen = (styles) => {
    return(
      <Welcome
        containerStyle={styles.container}

        imageStyle={styles.welcomeImages}
        
        lessonButtonAction={this.changeScreen}

        quizButtonAction={this.createQuiz}
      />
    )
  }

  createAlphabetScreen = (styles, farsiAlphabet) => {
    console.log(test);
    return(
    <Alphabets
      containerStyle={styles.alphabetContainer}

      topContainer={styles.alphabetContainerTop}
      closeButtonStyle={styles.alphabetContainerCloseButton}
      closeButtonAction={this.changeScreen}

      midContainer={styles.alphabetContainerMid}
      alphabets={this.alphabets}
      farsiAlphabet={farsiAlphabet}
      letterStyle={styles.letter}
      letterContainerStyle={styles.letterContainer}
      letterAction={this.changeScreen}

      bottomContainer={styles.alphabetContainerBottom} />
    );
  }
  
  createQuizScreen = (styles) => {
    return(
      <Quiz
        containerStyle={styles.quizCardContainer}

        topStyle={styles.quizCardTop}
        closeButtonStyle={styles.quizCardCloseButton}
        closeButtonAction={this.changeScreen}

        fishStyle={styles.quizCardFishContainer}
        quizVideo={this.state.quizVideo}

        midStyle={styles.quizCardMid}
        displayImage={this.state.images[this.state.quizScreen]}
        imageStyle={styles.quizImage}


        botStyle={styles.quizCardBottom}
        textStyle={styles.quizCardTextOptions}
        textAction={this.changeQuizVideo}
        quizOptions={this.state.quizOptions}
        correctOption={this.state.quizScreen}
      />
    )
  }

  renderScreen = (name) => {
    if(this.allKeys.includes(name)){
      return(this.createLetterScreen(styles, farsiAlphabet, name))
    } else if(name === 'welcome') {
      return (this.createWelcomeScreen(styles));
    } else if (name === 'alphabet'){
      return (this.createAlphabetScreen(styles, farsiAlphabet));
    } else if (name === 'quiz'){
      return(this.createQuizScreen(styles, farsiAlphabet))
    }
  }

  render(){
    return(
      this.renderScreen(this.state.screen)
    )
  }
}

const styles = StyleSheet.create({
  //Welcome Screen
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  welcomeImages:{
    resizeMode: 'contain',
    height: win['height']/3,
    width: win['width']/2
  },

  //Alphabet container
  alphabetContainer:{
    flex: 1,
    backgroundColor: 'orange',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  alphabetContainerTop:{
    flex: 2,
    flexDirection: 'row-reverse',
    alignSelf: 'stretch',
    backgroundColor: 'black',
    flexDirection: 'row-reverse',
  },
  alphabetContainerCloseButton:{
    marginTop: 20,
    marginRight: 30,
    resizeMode: 'contain',
    width: win['width']/10 * 2,
    height: win['height']/15 * 1.8,
  },
  alphabetContainerMid:{
    flex: 10,
    backgroundColor: 'black',
    alignSelf: 'stretch',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  letterContainer: {
    margin: (Dimensions.get('window')['width'] < 415 ? 0 : 27),
    padding: 0,
    resizeMode: 'contain',
    height: win['height']/12,
    width: (Dimensions.get('window')['width'] < 415 ? win['width']/4 : win['width']/11),
  },
  letter: {
    color: 'white',
    marginBottom: 0,
    padding: 0,
    resizeMode: 'contain',
    fontSize: win['height']/15,
    lineHeight: win['height']/13,
    textAlign: 'center',
  },
  alphabetContainerBottom:{
    flex: 1,
    backgroundColor: 'black',
    alignSelf: 'stretch',
    justifyContent: 'space-around'
  },

  //Letter Card
  letterCardContainer:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  letterCardCloseContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: 'black',
    alignSelf: 'stretch',
  },
  closeButton: {
    marginTop: 70,
    marginRight: 30,
    resizeMode: 'contain',
    width: win['width']/4,
    height: win['height']/8
  },
  letterCardLetterContainer:{
    flex: 1,
    backgroundColor: 'orange',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  letterCardImageContainer: {
    flex: 1,
    backgroundColor: 'orange',
    alignSelf: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letterCardImageStyle:{
    resizeMode: 'contain',
    height: win['height']/4,
    width: win['width']/3,
  },
  letterCardCartoonContainer:{
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    backgroundColor: 'black',
    alignSelf: 'stretch'
  },
  letterCardCartoon:{
    resizeMode: 'contain',
    height: win['height']/10
  },
  letterCardLetter:{
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    lineHeight: win['height']/5,
    marginTop: (win['height'] < 813 ? 0 : win['height']/100),
    padding: 35,
    width: win['width']/2,
    fontSize: win['height']/5,
  },
  letterCardWord:{
    fontSize: 12,
    color: 'white',
    borderWidth: 1
  },

  // Quiz Card
  quizCardContainer:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'orange'
  },
  quizCardTop:{
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: 'black',
    alignSelf: 'stretch',
  },
  quizCardCloseButton:{
    marginTop: 70,
    marginRight: 30,
    resizeMode: 'contain',
    width: win['width']/4,
    height: win['height']/8
  },
  quizCardFishContainer:{
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  quizCardMid: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quizCardBottom: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  quizCardTextOptions: {
    color: 'white',
    fontSize:win['width']/6
  },
  quizImage:{
    resizeMode: 'contain',
    height: win['height']/4,
    width: win['width']/2
  }
});
