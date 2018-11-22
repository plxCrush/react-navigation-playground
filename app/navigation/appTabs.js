import React from "react";
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";
import * as Screens from "../screens";

const SettingsStack = createStackNavigator(
    {
        Settings: Screens.Settings,
        EditProfile: Screens.EditProfile,
        ChangePassword: Screens.ChangePassword
    }
);

export const AppTabs = createBottomTabNavigator(
    {
        Dashboard: Screens.Dashboard,
        Posts: Screens.Posts,
        Settings: SettingsStack
    },
    {
        navigationOptions: {
            header: null
        }
    }
);