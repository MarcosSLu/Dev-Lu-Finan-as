import React, { useState, useContext } from "react";
import { Platform } from 'react-native'
import { Text, View, ActivityIndicator } from "react-native";
import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, LinkText, Link } from "./styles";

import { useNavigation } from '@react-navigation/native'

import { AuthContext } from "../../contexts/auth";


export default function SignIn() {
    const navigation = useNavigation()
    const { signIn, loadingAuth } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function hgandleLogin() {
        signIn(email, password)
    }
    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <Logo
                    source={require('../../assets/Logo.png')}
                />

                <AreaInput>
                    <Input
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChangeText={(text) => setEmail(text.toLowerCase().trim())}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite sua senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.7} onPress={hgandleLogin}>

                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color='#FFF' />
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
            </Container>
        </Background>

    );
}