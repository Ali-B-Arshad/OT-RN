// Native Imports
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import { Button } from "react-native-paper";

// Component Imports
import AppFormField from '../../components/AppForm/AppFormField';
import SubmitButton from '../../components/AppForm/SubmitButton';
import AppForm from '../../components/AppForm/AppForm';
import AppButton from '../../components/AppForm/AppButton';

// Style Imports
import ComponentsStyle from '../../styles/ComponentsStyle';

// Supporting Imports
import * as Yup from "yup";

// Api Imports
// import authAPI from '../../api/auth';
import userApi from '../../utils/api/user';

// import jwtDecode from 'jwt-decode';
// import AuthContext from '../../auth/context';
import useAuth from '../../utils/auth/useAuth';
import ErrorMessage from '../../components/AppForm/ErrorMessage';

var { width, height } = Dimensions.get('window')


const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().required().label("Last name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  retypepassword: Yup.string().required().min(4).label("Retype-Password"),

});


const SignUpScreen = ({ navigation }) => {
  const { logIn } = useAuth()
  const [error, setError] = useState(false);
  const [passwordChecked, setPasswordChecked] = useState(false);



  const handleSubmit = async (userInfo) => {
    // if(userInfo.password == userInfo.retypepassword){
    const result = await userApi.register(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data);
      else {
        setError("An unexpected error occured");
        console.log(result)
      }
      return;
    }
    const { data: authToken } = await authAPI.login(
      userInfo.email,
      userInfo.password,
    )
    logIn(authToken);
    // }
    // else setPasswordChecked(true);
  }
  return (
    // <ScrollView style={styles.container}>
    <ImageBackground source={require('../../assets/images/splashscreen.png')} style={styles.image}>
      <View style={styles.child}>
        <View style={{ alignSelf: "center" }}>
          <Text style={styles.titleText}>Sign Up</Text>
        </View>
        <AppForm
          initialValues={{ firstname: "", lastname: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <View style={{ alignSelf: "center" }}>
            <ErrorMessage error="Could not register account" visible={error} />
            <ErrorMessage error="Passwords do not match" visible={passwordChecked} />
            <AppFormField
              style={ComponentsStyle.inputStyleSign}
              label="First Name"
              name="firstName"
              selectionColor="#f4f4f2"
              underlineColor="#f4f4f2"
              textColor="#f4f4f2"
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <AppFormField
              style={ComponentsStyle.inputStyleSign}
              label="Last Name"
              name="lastName"
              selectionColor="#f4f4f2"
              underlineColor="#f4f4f2"
              textColor="#f4f4f2"
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <AppFormField
              style={ComponentsStyle.inputStyleSign}
              label="Email"
              name="email"
              selectionColor="#f4f4f2"
              underlineColor="#f4f4f2"
              textColor="#f4f4f2"
            />
          </View>

          <View style={{ alignSelf: "center" }}>
            <AppFormField
              style={ComponentsStyle.inputStyleSign}
              label="Password"
              name="password"
              selectionColor="#f4f4f2"
              underlineColor="#f4f4f2"
              textColor="#f4f4f2"
              textContentType="password"
              secureTextEntry={true}
            />

          </View>
          {/* <View style={{alignSelf:"center"}}>
            <AppFormField 
                  style={ComponentsStyle.inputStyleSign} 
                  label="Re-type Password"
                  name="retypepassword" 
                  selectionColor="#f4f4f2" 
                  underlineColor="#f4f4f2" 
                  textColor="#f4f4f2"
                  textContentType ="password"
                  secureTextEntry = {true}
                  />

            </View> */}
          <View style={{ alignSelf: "center" }}>
            <SubmitButton name="Sign Up" />
            <Button
              style={{ backgroundColor: "#DB4437", marginVertical: 5, }}
              color="#F4F4F2">Sign in with google</Button>
          </View>

          <View style={{
            marginVertical: 15,
            borderBottomColor: '#F4f4F2',
            borderBottomWidth: 1,
            opacity: 0.5,
          }}>
          </View>

          <View style={{ alignSelf: "center" }}>
            <Text style={styles.text}>Already have an account?</Text>
            <AppButton name="Sign In" onPress={() => navigation.navigate("Login")} />
          </View>
        </AppForm>
      </View>
    </ImageBackground>
    // </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // marginVertical:30,
  },
  child: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: "center",
    paddingHorizontal: 20,
    // paddingVertical :30,

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  titleText: {
    fontFamily: "Poppins-Bold",
    color: "#E8E8E8",
    fontSize: 30,
    marginVertical: 10,
    opacity: 0.6,
    alignSelf: "center"
  },
  text: {
    fontFamily: "Poppins-Medium",
    color: "#E8E8E8",
    fontSize: 20,
    opacity: 0.8,
  },
  btnSign: {
    backgroundColor: "#495464",
    marginVertical: 10,
    width: width / 3,
    alignSelf: "center",
  }
});

export default SignUpScreen;