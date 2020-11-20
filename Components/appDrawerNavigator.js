import *as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import { TabNavigator } from './tabNavigator';
import CustomSideBarMenu from './CSBM.js'
import Settings from '../screens/settings.js'

export const DrawerNavigator=createDrawerNavigator({
    Home:{screen:TabNavigator},
    Settings:{screen:Settings}
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})