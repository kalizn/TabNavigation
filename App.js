import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Perfil from './src/pages/Perfil';
import Contato from './src/pages/Contato';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Home} />
      <Tab.Screen name="Sobre" component={Sobre} />
      <Tab.Screen 
      name="Contato" 
      component={Contato} 
      initialParams={{nome:"Antonio", tel:"9XXXX-XXXX", end:"Rua X, Bairro Y"}}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={Tabs} 
        options={{
          title: 'Bem-Vindo',
          headerStyle: {
            backgroundColor: '#121212'
          },
          headerTintColor: '#FFF'
        }}
        />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
