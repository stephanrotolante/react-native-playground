import React from 'react';
import { StyleSheet, View } from 'react-native';

const {buttonControlContainer} = StyleSheet.create({
    buttonControlContainer: {
        flex:1,
        flexDirection:'row',
        backgroundColor: '#000'
      }
  });
export default () => {
    return (
        <View style={buttonControlContainer}>
            
        </View>
    );
}