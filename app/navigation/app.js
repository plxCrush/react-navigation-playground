import React from "react";
import {createStackNavigator} from "react-navigation";
import {AppTabs} from "./appTabs";

export const AppStack = createStackNavigator(
    {
        App: AppTabs
    },
    {
        navigationOptions: {
            header: null
        }
    }
);