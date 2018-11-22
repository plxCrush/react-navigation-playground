import React from "react";
import {StyleSheet, Text, View} from "react-native";

export class EditProfile extends React.Component {

    static navigationOptions = {
        title: "Edit Profile"
    };

    render = () => (
        <View style={styles.root}>
            <Text>Edit Profile!</Text>
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
