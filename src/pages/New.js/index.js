import React, { useState } from "react";

import { Background, Input, SubmitButton, SubmitText } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import Header from "../../../components/Header";

import RegisterTypes from "../../../components/RegisterTypes";


export default function New() {

    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [type, setType] = useState('receita')
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header title="Registrando" />

                <SafeAreaView style={{ marginTop: 14, alignItens: 'center' }}>
                    <Input
                        placeholder='Descrição de registro'
                        value={labelInput}
                        onChangeText={(text) => setLabelInput(text)}
                    />
                    <Input
                        placeholder='Valor Desejado'
                        keybordType='numeric'
                        value={valueInput}
                        onChangeText={(text) => setValueInput(text)}
                    />

                    <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)} />

                    <SubmitButton>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}