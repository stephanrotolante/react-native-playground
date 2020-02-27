import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements'

const {submitButtonContainer} = StyleSheet.create({
    submitButtonContainer: {
        flex:1
    }
  });
export default () => {
    return (
        <View style={submitButtonContainer}>
            <Icon name="send" type="feather"/>
        </View>
    );
}