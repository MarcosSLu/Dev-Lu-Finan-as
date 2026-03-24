import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { View, Text } from "react-native";

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
             name="SignIn"
             component={SignIn}
             options={{
                headerShown: false,
             }}
             />
             
            <AuthStack.Screen
             name="SignUp"
             component={SignUp}
             options={{
                headerStyle:{
                    backgroundColor: '#'
                }
             }} />
        </AuthStack.Navigator>

       
    )
}

export default AuthRoutes;