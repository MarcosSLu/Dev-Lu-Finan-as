import React, { useContext } from 'react';

import { View, Text, Image } from 'react-native';

import {
    DrawerItemList,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';



import { AuthContext } from '../../src/contexts/auth';

export default function CustomDrawer(props) {

    const { user, signOut } = useContext(AuthContext);

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>

            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 25
                }}
            >
                <Image
                    source={require('../../assets/Logo.png')}
                    style={{ width: 90, height: 90 }}
                    resizeMode="contain"
                />

                <Text
                    style={{
                        fontSize: 18,
                        marginTop: 14
                    }}
                >
                    Bem-vindo
                </Text>

                <Text
                    style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        marginBottom: 14,
                        paddingHorizontal: 20
                    }}
                    numberOfLines={1}
                >
                    {user && user.name}
                </Text>

            </View>

            <DrawerItemList {...props} />

            <View style={{ flex: 1 }} />

            <DrawerItem
                {...props}
                label="Sair"
                onPress={() => signOut()}
                style={{
                    borderColor: "#c62c36",
                    borderWidth: 2,
                    borderRadius: 50,
                    marginBottom: 15
                }}
                labelStyle={{
                    color: "#c62c36",
                    fontWeight: "bold",
                    
                }}
            />

        </DrawerContentScrollView>
    )
}