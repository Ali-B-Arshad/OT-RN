// Native Imports
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, ScrollView, Image, ImageBackground, Dimensions } from 'react-native';
import { Button, List } from 'react-native-paper';
import Empty from '../../assets/svgs/empty.svg';

// Styles Imports
import ScreenStyles from '../../styles/ScreenStyles'

// Components
// import ProfessionalAvator from '../../components/ProfessionalAvatar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TabNavigatorStyle from '../../styles/TabNavigatorStyle';


// Auth Imports
import useAuth from '../../utils/auth/useAuth';


// Screen Imports
// import UserProjectsScreen from './UserProjectsScreen';
// import UserPostsScreen from './UserPostsScreen';
// import AboutUser from './AboutScreen';



const Tab = createMaterialTopTabNavigator();

const MR = () => <Text>Music</Text>;

const UserProjects = () => {
    return (
        <Tab.Navigator tabBarOptions={TabNavigatorStyle.userProjectsTab} >
            <Tab.Screen name="Projects" component={MR} />
            <Tab.Screen name="Posts" component={MR} />
        </Tab.Navigator>
    )
}

const display = () => {
    return (
        <View style={styles.centered} >
            <Empty />
            <Text>Nothing to Display</Text>
        </View>
    );
}

const Inbox = ({ navigation }) => {
    const { user, logOut } = useAuth();

    return (
        <ScrollView style={ScreenStyles.userprofileScreen}>
            {/* <View>
                <ProfessionalAvator name={`${user.firstname}${user.lastname}`} title="Interior Designer" email={user.email} style={profileAvatar} disabled={true} size={90} />
            </View> */}
            <View>
                <Tab.Navigator
                    tabBarOptions={TabNavigatorStyle.userProfileTab}>
                    <Tab.Screen name="To Review" component={display} />
                    <Tab.Screen name="Assigned" component={display} />
                    <Tab.Screen name="All" component={display} />
                    {/* <Tab.Screen name="Design a room" component={display} /> */}
                </Tab.Navigator>
            </View>
        </ScrollView>
    );

}
let ScreenHeight = Dimensions.get("window").height;
const styles = {
    border: "none",
    marginVertical: 15,
    alignItems: 'center',
    nameText: {
        fontSize: 18,
        marginTop: 5,
        color: "#495464",
        fontFamily: 'Poppins-Bold',
    },
    titleText: {
        fontSize: 16,
        fontWeight: "normal",
        color: "#495464",
        fontFamily: 'Poppins-Medium',
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
        height: ScreenHeight,
        // flex: 1,
    }
}


export default Inbox;