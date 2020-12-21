// Native Imports
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, ScrollView, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Button, List, TextInput, Avatar } from 'react-native-paper';

// Components Imports
import InputText from '../../components/AppForm/AppTextInput';
import ComponentsStyle from '../../styles/ComponentsStyle';

// Styles Imports
import ScreenStyles from '../../styles/ScreenStyles'
import AvatarComp from './AvatarComp';


const AvatarCmp = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
            <View style={props.style}>
                {/*  */}
                <Avatar.Image size={props.size} source={require('../../assets/images/p1.jpg')} />
                <Text style={props.style.nameText}>{props.name}</Text>
                <Text style={props.style.titleText}>{props.title}</Text>
                <Text style={props.style.titleText}>{props.email}</Text>
            </View>
        </TouchableOpacity>
    )
}

const ProfileEditScreen = () => {
    return (
        <ScrollView style={ScreenStyles.profileEditScreen}>
            <View style={ScreenStyles.profileEditScreen.inputView}>
                {/* <ProfessionalAvatar style={profileAvatar} size={120} /> */}
                <AvatarCmp style={profileAvatar} size={120} />
                {/* <AppButton name="Upload"/> */}
                <Button style={{ backgroundColor: "#495464", alignSelf: "center", width: Dimensions.get('window').width / 2, marginHorizontal: 10 }} color="#F4F4F2">Upload Picture</Button>
            </View>
            <View style={ScreenStyles.profileEditScreen.inputView}>
                <Text style={ScreenStyles.profileEditScreen.textLabel}>First Name</Text>
                <InputText style={ComponentsStyle.inputStyle} textColor="#1b262c" selectionColor="#1b262c" />
            </View>
            <View style={ScreenStyles.profileEditScreen.inputView}>
                <Text style={ScreenStyles.profileEditScreen.textLabel}>Last Name</Text>
                <InputText style={ComponentsStyle.inputStyle} textColor="#1b262c" selectionColor="#1b262c" />
            </View>
            <View style={ScreenStyles.profileEditScreen.inputView}>
                <Text style={ScreenStyles.profileEditScreen.textLabel}>Job Title</Text>
                <InputText style={ComponentsStyle.inputStyle} textColor="#1b262c" selectionColor="#1b262c" />
            </View>
            <View style={ScreenStyles.profileEditScreen.inputView}>
                <Text style={ScreenStyles.profileEditScreen.textLabel}>Location</Text>
                <InputText style={ComponentsStyle.inputStyle} textColor="#1b262c" selectionColor="#1b262c" />
            </View>
            <View style={ScreenStyles.profileEditScreen.inputView}>
                <Text style={ScreenStyles.profileEditScreen.textLabel}>About</Text>
                <InputText style={ComponentsStyle.inputStyle} textColor="#1b262c" selectionColor="#1b262c" multiline={true} />
            </View>
        </ScrollView>
    );
}

const profileAvatar = {
    border: "none",
    marginTop: 15,
    alignItems: 'center',
    nameText: {
        fontSize: 16,
        marginTop: 5,
        // fontWeight:"bold",
        color: "#495464",
    },
    titleText: {
        fontSize: 14,
        fontFamily: "Poppins-Medium",
        // fontWeight:"normal",
        color: "#495464",
    }
}

export default ProfileEditScreen;
