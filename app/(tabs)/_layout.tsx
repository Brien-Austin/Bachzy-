import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import AntDesign from '@expo/vector-icons/AntDesign'
import { MaterialIcons } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs  
        screenOptions={{
          tabBarActiveTintColor: '#7536e5',
          tabBarInactiveTintColor : "gray",
          tabBarIconStyle : {
            width : 28,
            height : 28

          },
          
          tabBarStyle : {
            height : 65,
            paddingBottom : 10,
            paddingTop : 10,
            
          }
        }}>
        <Tabs.Screen  
          name="index"
          options={{
            title: 'For you',
            tabBarLabel : "Home",
            headerTitleAlign : "center",
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
          }}
        />
                    <Tabs.Screen
          name="listings"
          options={{
            title: 'Rooms and PG',
            tabBarLabel : "Rooms",
            headerTitleAlign : "center",
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="hotel" color={color} />,
          }}
        />
        <Tabs.Screen
          name="new"
          options={{
            title: 'Create',
            
            headerTitleAlign : "center",
            tabBarIcon: ({ color }) => <AntDesign size={28} name="pluscircle" color={color} />,
          }}
        />
               <Tabs.Screen
          name="earn"
          options={{
            title: 'Earn and Win',
            tabBarLabel : "Earn",
            headerTitleAlign : "center",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="money" color={color} />,
          }}
        />
      
        <Tabs.Screen 
          name="profile"
          options={{
            title: 'Your Profile',
            tabBarLabel : "Profile",
            headerTitleAlign : "center",
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          }}
        />
      </Tabs>
    )
}