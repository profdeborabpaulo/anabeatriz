
//importar o componente que controla a navegação (rotas)
import{ Stack } from 'expo-router';

export default function Layout( ) {
  return(
    <Stack>
      <Stack.Screen
      name='index'
      options={{
        title: "Agendador de Tarefas",
      }}
      />

      <Stack.Screen
      name='nova-tarefa'
      options={{
        title: "Nova Tarefa",       
      }}
      />
    </Stack>
  );
  
}

import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

SplashScreen.preventAutoHideAsync();
