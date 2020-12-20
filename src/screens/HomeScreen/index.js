import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Container from '../../components/Universal/container';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginRequest } from '../../redux/actions';
import AppForm from '../../components/AppForm/AppForm';
import AppFormField from '../../components/AppForm/AppFormField';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = ({ loginRequest, userInfo }) => {
  useEffect(() => {
    // loginRequest();
  }, []);
  useEffect(() => {
    // console.log('UserInfo on Home screen', userInfo);
  });
  // , [userInfo]
  return (
    <Container>
      {/* <Text>Lgin</Text> */}
      <AppForm >
        <AppFormField label="Email" name="Email" />
        <AppFormField label="Password" name="Password" secureTextEntry={true} />
      </AppForm>
    </Container>
  );
};

function mapStatesToProps(state) {
  return {
    userInfo: state.userInformation,
  };
}

const mapDispatchToProps = (dispatch) => ({
  loginRequest: bindActionCreators(loginRequest, dispatch),
});

export default connect(mapStatesToProps, mapDispatchToProps)(Component);
