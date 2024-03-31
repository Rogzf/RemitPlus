import React, { useEffect ,useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./screen/Home";
import Quienes from "./screen/WhoWeAre";
import login from "./screen/Login";
import LoanAplication from "./screen/LoanApplication";
import appFirebase from "./Credentials";
import { getAuth,signOut} from "firebase/auth";
import { TouchableOpacity } from 'react-native';




const tabs = createBottomTabNavigator();
const homeStack = createStackNavigator();
const auth = getAuth(appFirebase);

function MyTabs({ authenticated }) { // Aquí se recibe authenticated como props
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Manejar la lógica después del cierre de sesión, como redireccionar a la pantalla de inicio de sesión
      })
      .catch((error) => {
        console.log("Error al cerrar sesión:", error);
      });
  };

  return (
    <NavigationContainer>
      <tabs.Navigator
        initialRouteName="home"
        screenOptions={{
          activeTintColor: "#525fe1",
          inactiveTintColor: "gray",
        }}
      >
        <tabs.Screen
          name="home"
          component={MyStack}
          options={{
            tabBarLabel: "Bienvenido.!",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-automation"
                size={40}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />

        <tabs.Screen
          name="Quienes Somos"
          component={Quienes}
          options={{
            title: "Quienes Somos",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#525fe1" },
            tabBarIcon: ({  color }) => (
              <MaterialCommunityIcons
                name="account-convert"
                size={40}
                color={color}
              />
            ),
          }}
        />
        
        {authenticated && (
          <tabs.Screen
            name="Solicitud"
            component={LoanAplication}
            options={{
              tabBarLabel: "Solicitud de prestamo",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account-check"
                  size={40}
                  color={color}
                />
              ),
              
              headerRight: () => (
                <TouchableOpacity onPress={handleLogout}>
                  <MaterialCommunityIcons
                    name="logout"
                    size={24}
                    style={{ marginRight: 20 }}
                    color="red"
                  />
                </TouchableOpacity>
              ),
            }}
          />
        )}
      </tabs.Navigator>
    </NavigationContainer>
  );
}

function MyStack({authenticated}) {
  return (
    <homeStack.Navigator initialRouteName="homeScreen">
      <homeStack.Screen
        name="Tu portal Financiero"
        component={Home}
        options={{
          title: "Tu Portal Financiero",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#525fe1" },
        }}
      />
      {!authenticated&&(

        <homeStack.Screen
        name="login"
        component={login}
        options={{
          title: "Login",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#525fe1" },
          headerBackTitleVisible: false,
        }}
      />
      )}
      
    </homeStack.Navigator>
  );
}

export default function Navigation() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const validationLogin = auth.onAuthStateChanged((user) => {
      setAuthenticated(!!user)
    });
    return validationLogin;
  }, []);

  return (
    <MyTabs authenticated={authenticated} /> 
  );
}