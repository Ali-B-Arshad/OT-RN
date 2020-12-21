// Native Imports
import 'react-native-gesture-handler';
// Native Imports
import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { Text } from 'react-native-paper';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Inbox from '../../screens/BasicScreen/Inbox';
import Calendar from '../../screens/BasicScreen/Calendar';
import Publish from '../../screens/BasicScreen/Publish';
import Profile from '../../screens/BasicScreen/Profile';
const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;




const Tab = createBottomTabNavigator();

const BottomNav = () => {


    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#1b262c',
                // inactiveTintColor:'#495465',
                showLabel: false,
                style: {
                    backgroundColor: '#F4F4F2'
                },
            }}
        >
            <Tab.Screen
                name="Home"
                //   The Main Home Screen ------ From App Stack All Screen availale from that stack navigator
                component={Inbox}
                options={({ route, navigation }) => ({
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="inbox" color={color} size={35} />
                    ),
                    // tabBarVisible: ((route) => {
                    //     let routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
                    //     console.log(routeName);
                    //     if (routeName === 'Home') return true;
                    //     else return false;
                    // })(route),
                })}
            />
            <Tab.Screen
                name="Planner"
                //   From Store Stack Screen will be avaible 
                component={AlbumsRoute}
                options={{
                    tabBarLabel: 'Planner',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="note" color={color} size={35} />
                    ),

                }}
            />
            <Tab.Screen
                name="Publish"
                //   Still have to figure out, how to do this
                component={Publish}
                options={{
                    tabBarLabel: 'Publish',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="plus-circle" color={color} size={35} />
                    ),
                }}
            />
            <Tab.Screen
                name="Calendar"
                //   Still have to figure out, how to do this
                component={Calendar}
                options={{
                    tabBarLabel: 'Calendar',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="calendar" color={color} size={35} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                //   Still have to figure out, how to do this
                component={Profile}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-settings" color={color} size={35} />
                    ),
                }}
            />
            {/* <Tab.Screen
                name="Chats"
                //   Chat Stack all screens 
                component={ChatStack}
                options={({ route }) => ({
                    tabBarLabel: 'Chats',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="chat" color={color} size={35} />
                    ),
                    tabBarVisible: ((route) => {
                        let routeName = getFocusedRouteNameFromRoute(route) ?? 'Chats';
                        console.log(routeName);
                        if (routeName === 'Chats') return true;
                        else return false;
                    })(route),
                })}

            />
            <Tab.Screen
                name="Profile"
                //   Profile stack All screens
                component={ProfileStack}
                options={({ route }) => ({
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-circle" color={color} size={35} />
                    ),
                    tabBarVisible: ((route) => {
                        let routeName = getFocusedRouteNameFromRoute(route) ?? 'Profile';
                        console.log(routeName);
                        if (routeName == 'Profile') return true;
                        else return false;
                    })(route),
                })}
            /> */}
        </Tab.Navigator>
    );
}


export default BottomNav;