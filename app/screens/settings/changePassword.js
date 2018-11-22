import React from "react";
import {StyleSheet, Text, View} from "react-native";

export class ChangePassword extends React.Component {

    static navigationOptions = {
        title: "Change Password"
    };

    render = () => (
        <View style={styles.root}>
            <Text>Change Password!</Text>
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
