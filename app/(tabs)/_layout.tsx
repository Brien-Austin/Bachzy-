import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function TabsLayout() {
    return (
        <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarShowLabel: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'For you',
            headerTitleAlign : "center",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="new"
          options={{
            title: 'Share content',
            headerTitleAlign : "center",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-square-o" color={color} />,
          }}
        />
      
        <Tabs.Screen 
          name="profile"
          options={{
            title: 'Your Profile',
            headerTitleAlign : "center",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          }}
        />
      </Tabs>
    )
}