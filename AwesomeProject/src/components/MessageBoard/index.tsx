import React from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';

const styles = StyleSheet.create({
    messageContainer: {
        flex: 10,
        backgroundColor: '#9DACFF'
    }
  });


export default () => {
    return (
        <View style={styles.messageContainer}>
            {/* <ScrollView style={{flex:1}}>

            </ScrollView> */}
        </View>
    );
}