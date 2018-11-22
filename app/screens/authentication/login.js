import React from "react";
import {StyleSheet, View, Button} from "react-native";
import {StackActions, NavigationActions} from "react-navigation"

export class Login extends React.Component {

    static navigationOptions = {
        header: null
    };

    goToDashboard = () => {

        const toDashboard = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: "App"})],
            key: null
        });
        this.props.navigation.dispatch(toDashboard);
    };

    goToSettings = () => {

        // reset root stack, then navigate to Settings Tab.
        const toSettings = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: "App"})],
            key: null
        });
        this.props.navigation.dispatch(toSettings);
        this.props.navigation.navigate("Settings");
    };

    goToSignUp = () => this.props.navigation.navigate("SignUp");

    render = () => (
        <View style={styles.root}>
            <Button title="Go To DashBoard"
                    onPress={this.goToDashboard}/>

            <Button title="Go To Settings"
                    onPress={this.goToSettings}/>

            <Button title="Go To Sign Up"
                    onPress={this.goToSignUp}/>

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
