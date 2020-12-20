// Native Imports
import 'react-native-gesture-handler';
import React from 'react';
import { Drawer } from 'react-native-paper';
import BottomNav from '../../navigations/MainStack/MainStack';

const user = true;

const HomeScreen = () => {
  return (
    <>
      <Drawer.Item
        // style={{ backgroundColor: '#64ffda' }}
        icon="star"
        label="First Item"
      />
      <BottomNav />
      {/* {user ?  : ""} */}


    </>
  );

}

export default HomeScreen;