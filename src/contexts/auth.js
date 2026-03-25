import React, {createContext, useState} from "react";

import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

export  const  AuthContext  = createContext({})

export default function AuthProvider({children}){
    const[user, setUser] = useState({nome: 'MATHEUS'})
    const [loadingAuth, setLoadingAuth] = useState(false)

    const navigation = useNavigation()


    async function signUp(email, password, nome){
        setLoadingAuth(true)

        try{
            const response = await api.post('/users', {
                name: nome,
                password: password,
                email: email,
            })
            setLoadingAuth(false)
            
            navigation.goBack()
            
        }catch(erro){
            console.log('Erro ao cadastrar!', erro.response?.data)
            setLoadingAuth(false)
        }
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

