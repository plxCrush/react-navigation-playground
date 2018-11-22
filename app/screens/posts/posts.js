import React from "react";
import {StyleSheet, Text, View} from "react-native";

export class Posts extends React.Component {

    render = () => (
        <View style={styles.root}>
            <Text>Posts!</Text>
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
