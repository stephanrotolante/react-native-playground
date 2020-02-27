import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import { SubmitButton } from './components';

type TextInputProps = {
    onChange: Function,
    text: string
};

const { textInputContainer, textInput, textInputWrapper } = StyleSheet.create({
    textInputContainer: {
        flex:6,
        flexDirection:'column',
        justifyContent:'center',
        backgroundColor:'#fff'
      },
      textInputWrapper: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderWidth: 1,
        borderColor:"#8E8E93",
        borderRadius:40,
        marginTop:7,
        marginLeft:3,
        marginRight:3,
        marginBottom:3
      },
      textInput: {
        flex:5,
        borderWidth:1,
        borderColor:'red'
      }
  });


export default ({onChange, text }: TextInputProps) => {
    return (
        <View style={textInputContainer}>
            <View style={textInputWrapper}>
                <TextInput 
                    style={textInput} 
                    value={text} 
                    defaultValue="Send a message"
                    onChangeText={ text => onChange(text)}/>
                <SubmitButton />
            </View>
        </View>
    );
}