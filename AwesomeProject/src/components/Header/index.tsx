import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    headerContianer: {
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'flex-end',
      backgroundColor:'#5C2751',
  
    }
  });


export default () => {
    return (
        <View style={styles.headerContianer}>
            <Text>{"Some Text"}</Text>
        </View>
    );
}