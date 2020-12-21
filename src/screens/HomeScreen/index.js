// Native Imports
import 'react-native-gesture-handler';
import React from 'react';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import BottomNav from '../../navigations/MainStack/MainStack';
import { StyleSheet, View, Image, ImageBackground, Dimensions } from 'react-native';
import { Drawer, Appbar, Text, Button } from 'react-native-paper';
const user = true;
import UserProfileScreen from '../BasicScreen/UserProfileScreen';

const HomeScreen = ({ navigation }) => {
  const [active, setActive] = React.useState('');

  return (
    <>
      {/* <Drawer.Section title="Profiles">
        <Drawer.Item
          label="First Item"
          active={active === 'first'}
          icon="star"
          onPress={() => setActive('first')}
        />
        <Drawer.Item
          label="Second Item"
          active={active === 'second'}
          icon="star"
          onPress={() => setActive('second')}
        />
      </Drawer.Section> */}
      {/* <UserProfileScreen /> */}

      {/* <View> 
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "black" }}>
          <Button
            icon={() => <MaterialComunityIcons name="menu" size={25} color="white" />}
            onPress={() => navigation.openDrawer()} />
          <Text style={{ width: Dimensions.get('window').width / 1.6 }}></Text>
           <Button
            icon={() => <MaterialComunityIcons name="account-edit" size={30}
              color="#1B262C" />}
            onPress={() => navigation.navigate("Edit Profile")}
          /> 
        </View>
      </View>
      * /}

      
      {/* {user ?  : ""} */}

      <BottomNav />


    </>
  );

}

export default HomeScreen;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});