import React, { useMemo } from "react";
import { Container, Label, Balance} from "./styles";

export default function BalanceItem({data}) {

    const LabelName = useMemo(() => {
        if (data.tag === 'saldo') {
            return {
                label: 'Saldo Atual',
                color: '3b3dbf'
            }
        }
        else if (data.tag === 'receita') {
            return {
                label: 'Entrada de hoje',
                color: '00b94a'
            }
        } else {
            return {
                label: 'Saídas de hoje',
                color: 'ef463a'
            }
        }
    }, [data])


    return (
        <Container bg={LabelName.color}>
            <Label>{LabelName.label}</Label>
            <Balance>R$ {data.saldo} </Balance>
        </Container >
    )
}
