import React from "react";
import { Text, View } from "react-native";
import { Background, Container, Logo, AreaInput, Input } from "./styles";



export default function SignIn() {
    return (
        <Background>
            <Container>
                

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
            </Container>
        </Background>

    );
}