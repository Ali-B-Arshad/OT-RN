import React, {useEffect, useRef, useState} from 'react';
import {View, StatusBar} from 'react-native';
import SplashScreenLogoAnimation from './splash.json';
import LottieView from 'lottie-react-native';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({navigation}) => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#FFFFFF');
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2300);
  }, []);

  useEffect(() => {
    if (!Loading) {
      navigation.navigate('Home');
    }
  }, [Loading]);


  return (

    <View style={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90%'
    }}>
      <LottieView
        source={SplashScreenLogoAnimation}
        style={{width: '100%'}}
        autoPlay
        loop
      />
    </View>
  );
};

export default Component;
