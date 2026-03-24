import { StatusBar } from 'react-native';
import { View, Text } from 'react-native';
import AuthProvider from './src/contexts/auth';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/index';

export default function App() {
  return (

    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#F0F4FF' barStyle='dark-content' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>


  );
}




