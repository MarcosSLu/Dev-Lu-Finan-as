import React, {createContext, useState} from "react";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export  const  AuthContext  = createContext({})

export default function AuthProvider({children}){
    const[user, setUser] = useState({
        nome: 'Marcos Lú'
    })

    const navigation = useNavigation()

    async function signUp(email, password, nome){
        try{
            const response = await api.post('/users', {
                name: nome,
                password: password,
                email: email,
            })

            navigation.goBack()

        }catch(erro){
            console.log('Erro ao cadastrar!', erro.response?.data)
        }
    }

    return(
        <AuthContext.Provider value={{ user, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

