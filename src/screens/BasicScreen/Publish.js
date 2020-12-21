import React from 'react'
import { Text, Dimensions, View } from 'react-native';
import AvatarComp from './AvatarComp';


function Publish() {
    return (
        <>
            <Text> Select Profiles </Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <AvatarComp size={70} name="facebook" style={profileAvatar} />
                <AvatarComp size={70} name="twitter" style={profileAvatar} />
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
        fontSize: 14,
        marginTop: 1,
        color: "#495464",
        fontFamily: 'Poppins-Bold',
        textAlign: 'center',
    },
    titleText: {
        fontSize: 15,
        color: "#495464",
        width: Dimensions.get('window').width / 3,
        fontFamily: 'Poppins-Medium',

    }
}