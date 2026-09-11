import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { RegisterContainer, RegisterTypeButton, RegisterLabel } from './styles';

export default function RegisterTypes({ type, sendTypeChanged }) {

    const [typeCheked, setTypeCheked] = useState(type)

    function changeType(name) {
        if (name === 'receita'){
            setTypeCheked('receita')
            sendTypeChanged('receita')
        }else{
            setTypeCheked('despesa')
            sendTypeChanged('despesa')
        }
    }
    return (
        <RegisterContainer>
            <RegisterTypeButton
                cheked={typeCheked === 'receita' ? true : false}
                onPress={() => changeType('receita')}
            >
                <Feather name="arrow-up" size={25} color="#121212" />
                <RegisterLabel>
                    Receita
                </RegisterLabel>
            </RegisterTypeButton>

            <RegisterTypeButton
                cheked={typeCheked === 'despesa' ? true : false}
                onPress={() => changeType('despesa')}
                >

                <Feather name="arrow-down" size={25} color="#121212" />
                <RegisterLabel>
                    Despesa
                </RegisterLabel>
            </RegisterTypeButton>

        </RegisterContainer>
    )
}