import React from "react";
import {createStackNavigator, createAppContainer} from "react-navigation";
import {AuthStack} from "../navigation/auth";
import {AppStack} from "../navigation/app";

const RootStack = createStackNavigator(
    {
        Auth: AuthStack,
        App: AppStack
    }
);

export const AppContainer = createAppContainer(RootStack);