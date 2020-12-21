// Native Imports
import React, { useState } from 'react';
import { Avatar } from 'react-native-paper';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AvatarComp = (props) => {
    const [clicked, setClicked] = useState(false);
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
            <View style={props.style}>
                {/* '../assets/p1.jpg' */}
                <Icon size={props.size} style={clicked ? { color: '#90caf9' } : { color: 'black' }} name={props.name} onPress={() => { setClicked(!clicked) }} />
                {/* <Avatar.Image size={props.size} source={props.source} /> */}
                <Text style={props.style.nameText}>{props.name}</Text>
                {/* <Text style={props.style.titleText}>{props.title}</Text> */}
                {/* <Text style={props.style.titleText}>{props.email}</Text> */}
            </View>
        </TouchableOpacity>

    );

}
export default AvatarComp;