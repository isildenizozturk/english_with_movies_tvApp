import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import { WebView } from 'react-native-webview';


export default function VideoPlayer({ navigation }) {

    const link = navigation.getParam('link');

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
            <Icon name="arrowleft" size={30} color="black"
                onPress={() => navigation.navigate('ContextPage')}
                style={{ marginTop: 15, marginLeft: 5 }}
            />
            <WebView
                style={styles.container}
                source={link}
            />



        </View>
    );
}


VideoPlayer.navigationOptions = {
    headerShown: false,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});