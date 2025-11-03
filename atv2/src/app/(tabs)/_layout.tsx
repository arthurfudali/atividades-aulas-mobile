import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';


export default function TabLayout() {
  return (
    <>
      <StatusBar style='auto' />
      <Tabs screenOptions={{
        tabBarActiveTintColor: '#112437',
        tabBarStyle: {
          height: 80,
          paddingTop: 8,
          borderTopWidth: 2,
          borderTopColor: '#bdbdbd'
        }
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarInactiveTintColor: '#bdbdbd',
            tabBarIcon: ({ color }) => <Octicons size={24} name="home" color={color} />,
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Perfil',
            tabBarInactiveTintColor: '#bdbdbd',
            tabBarIcon: ({ color }) => <Octicons size={24} name="person" color={color} />,
            headerShown: false
          }}
        />
      </Tabs>
    </>
  );
}
