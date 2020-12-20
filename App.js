import React from 'react';
import Onetouch from './src/Onetouch';
import { Provider } from 'react-redux';
import store from './src/utils/redux/store';
import { Provider as PaperProvider, DefaultTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Poppins-Medium',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Bold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-Regular',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
  },
}

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#f4f4f2',
    accent: '#495464',
    background: '#f4f4f2',
    surface: '#495464',
    text: '#495464',
  }
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme} >
        <Onetouch />
      </PaperProvider>
    </Provider>
  );
};

export default App;
