import React from "react";
import { Platform } from 'react-native'
import { Text, View } from "react-native";
import { Background, Container, Logo, AreaInput, Input,  SubmitButton, SubmitText, LinkText, Link } from "./styles";

import  {useNavigation} from '@react-navigation/native'



export default function SignIn() {
    const navigation = useNavigation()
    
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
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite sua senha"
                    />
                </AreaInput>

                <SubmitButton  activeOpacity={0.7}>
                    <SubmitText>Acessar</SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta</LinkText>
                </Link>
            </Container>
        </Background>

    );
}