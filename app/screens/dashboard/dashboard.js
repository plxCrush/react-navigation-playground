import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import {NavigationActions, StackActions} from "react-navigation";

export class Dashboard extends React.Component {

    static navigationOptions = {
        title: "Dashboard"
    };

    logout = () => {

        const toLogin = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: "Auth"})],
            key: null
        });
        this.props.navigation.dispatch(toLogin);
    };

    render = () => (
        <View style={styles.root}>
            <Text>Dashboard!</Text>
            <Button title="Logout"
                    onPress={this.logout}/>
            <Button title="Test Back"
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
