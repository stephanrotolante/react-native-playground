import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import io from 'socket.io-client';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import { getUUID } from './getUUID';
import { Header, Controls, MessageBoard } from './src/components';

export default function App() {



  const [id,] = useState(getUUID());
  const [text,setText] = useState(null);
  const [messages,setMessages] = useState([])
  const [isMatched,setIsMatched] = useState(false);
  const { current: socket } = useRef(io("http://192.168.200.185:3000"));

  // Tells client that a match has been made
  socket.on('match-found',() => {
      setIsMatched(true);
  });

  // Receives message from server
  socket.on('message', text => {

      let temp = [...messages];

      temp.push({name: 'Stranger', message:text});

      setMessages(temp);
  })



  useEffect(() => {

    // Creates new instance of client in the server
    socket.emit('new-client',id);
  }, []);

  const handleSubmit = () => {

    if(isMatched){
         // Sends message to the server
        socket.emit("message",{id,message:text});

        setText('');

        let temp = [...messages];

        temp.push({name: 'Me', message:text});

        setMessages(temp);
    }
}

  

 

  return (
    <View style={container}>
        <Header/>
        <KeyboardAvoidingView style={{flex:16}} behavior="padding" >
          <MessageBoard />
          <Controls text={text} onChange={setText}/>
        </KeyboardAvoidingView>
    </View>
  );
}

const {container} = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});


/**
 * <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} value={text} onChangeText={text => setText(text)}/>
      <Button title="Submit" onPress={handleSubmit}/> 
 */