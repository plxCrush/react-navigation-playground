import React from "react";
import {createStackNavigator} from "react-navigation";
import * as Screens from "../screens";

export const AuthStack = createStackNavigator(
    {
        Login: Screens.Login,
        SignUp: Screens.SignUp
    },
    {
        navigationOptions: {
            header: null
        }
    }
);