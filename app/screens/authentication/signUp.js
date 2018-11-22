import React from "react";
import {StyleSheet, Text, View} from "react-native";

export class SignUp extends React.Component {

    static navigationOptions = {
        title: "SIGN UP",
        headerRight: <Text>Header Right</Text>
    };

    render = () => (
        <View style={styles.root}>
            <Text>SignUp!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
