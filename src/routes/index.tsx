import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from '~/contexts/ThemeContext';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Configurations from '~/screens/configurations';
import ProjetosGitHub from '../api/API_github';
import Articles from '../screens/Articles';
import Candidaturas from '../screens/Candituras';
import DetalhesCandidatura from '../screens/Candituras/DetalhesCandidatura';
import Qualifications from '../screens/Qualifications';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerStyle: { backgroundColor: isLightTheme ? '#000000' : '#ffffff' }, headerTintColor: isLightTheme ? "#ffffff" : '#000000' }} />
      <Stack.Screen name="Configurations" component={Configurations} options={{ headerStyle: { backgroundColor: isLightTheme ? '#000000' : '#ffffff' }, headerTintColor: isLightTheme ? "#ffffff" : '#000000' }} />
    </Stack.Navigator>
  );
}

function CandidaturasStack() {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';

  return (
    <Stack.Navigator>
      <Stack.Screen name="Candidaturas" component={Candidaturas} options={{ headerShown: false }} />
      <Stack.Screen name="DetalhesCandidatura" component={DetalhesCandidatura} options={{ title: 'Detalhes da Candidatura', headerStyle: { backgroundColor: isLightTheme ? '#000000' : '#ffffff' }, headerTintColor: isLightTheme ? "#ffffff" : '#000000' }} />
    </Stack.Navigator>
  );
}


export default function Routes() {
  const { theme } = useTheme();
  const isLightTheme = theme === 'light';

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: isLightTheme ? '#0A0A0A' : '#f0f0f0' },
        tabBarActiveTintColor: isLightTheme ? '#fff' : '#000',
        tabBarInactiveTintColor: isLightTheme ? '#a9a9a9' : '#838383',
        tabBarLabelStyle: { fontSize: 11, fontWeight: 'semibold' }
      }}>
        <Tab.Screen name="Home" component={HomeStack} options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Feather name='home' color={color} size={size} />
          ), title: ''
        }} />
        <Tab.Screen name='Projetos' component={ProjetosGitHub} options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Feather name='code' color={color} size={size} />
          ), title: ''
        }} />
        <Tab.Screen name='Artigos' component={Articles} options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Feather name='book' color={color} size={size} />
          ), title: ''
        }} />
        <Tab.Screen name='Candidaturas' component={CandidaturasStack} options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Feather name='bookmark' color={color} size={size} />
          ), title: ''
        }} />
        <Tab.Screen name='Qualificações' component={Qualifications} options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <Feather name='check' color={color} size={size} />
          ), title: ''
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
