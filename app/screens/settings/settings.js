import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";

export class Settings extends React.Component {

    static navigationOptions = {
        title: "Settings"
    };

    goToEditProfile = () => this.props.navigation.navigate("EditProfile");

    goToChangePassword = () => this.props.navigation.navigate("ChangePassword");

    render = () => (
        <View style={styles.root}>
            <Text>Settings!</Text>

            <Button title="Edit Profile"
                    onPress={this.goToEditProfile}/>

            <Button title="Change Password"
                    onPress={this.goToChangePassword}/>

            <Button title="Test Back"
                    color="red"
                    onPress={() => this.props.navigation.goBack()}/>
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
