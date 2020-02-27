import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TextInput, ButtonControl } from './components';

type TextInputProps = {
    onChange: Function,
    text: string
};


const {controlsContainer} = StyleSheet.create({
    controlsContainer: {
        flex:1,
        flexDirection:'row',
        backgroundColor: '#4BC0D9'
      }
  });


export default ({onChange, text}: TextInputProps) => {

    return (
        <View style={controlsContainer}>
            <TextInput  text={text} onChange={onChange}/>
            <ButtonControl />
        </View>
    );
}