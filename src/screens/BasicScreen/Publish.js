import React from 'react'
import { Text, Dimensions, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import AvatarComp from './AvatarComp';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Publish() {
    let ScreenWidth = Dimensions.get("window").width;
    return (
        <>
            <Text> Select Profiles </Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <AvatarComp size={70} name="facebook" style={profileAvatar} />
                <AvatarComp size={70} name="twitter" style={profileAvatar} />
            </View>
            <TextInput
                multiline={true}
                numberOfLines={4}
                placeholder="Enter Caption"
                style={{ backgroundColor: 'white', width: ScreenWidth - 10, borderRadius: 15 }}
            />

            <View >
                <TouchableOpacity >
                    {/* style={props.style} */}
                    <View style={{ display: 'flex', flexDirection: 'row', padding: 5 }}>
                        {/* '../assets/p1.jpg' */}
                        <Icon size={25} style={{ marginRight: 5 }} name="cloud-upload" onPress={() => { console.log("Clicked"); }} />
                        {/* <Avatar.Image size={props.size} source={props.source} /> */}
                        <Text style={{ color: 'black' }}>Upload Image</Text>
                        {/* <Text style={props.style.titleText}>{props.title}</Text> */}
                        {/* <Text style={props.style.titleText}>{props.email}</Text> */}
                    </View>
                </TouchableOpacity>
            </View>

        </>
    )
}


export default Publish


const profileAvatar = {
    marginVertival: 100,
    border: "none",
    marginVertical: 15,
    nameText: {
        fontSize: 12,
        color: "#495464",
        fontFamily: 'Poppins-Bold',
        marginHorizontal: 5,
    },
    titleText: {
        fontSize: 15,
        color: "#495464",
        width: Dimensions.get('window').width / 3,
        fontFamily: 'Poppins-Medium',

    }
}