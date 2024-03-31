import React, { useEffect ,useState} from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { ImageBackground } from "react-native"; //me da error revisarlo
import { getAuth } from "firebase/auth";
import appFirebase from "../Credentials";

const auth=getAuth(appFirebase)
const Home = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const validationLogin = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
    return validationLogin;
  }, []);

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "blue",
          marginTop: 20,
          marginBottom: 20,
          textAlign: "center",
          paddingHorizontal: 20,
          fontWeight: "bold",
        }}
      >
        ¡Bienvenido a RemitPlus tu entidad financiera por Excelencia..!
      </Text>
      <Text
        style={{
          fontSize: 20,
          paddingHorizontal: 20,
          textAlign: "justify",
          color: "blue",
        }}
      >
        Creado especialmente para ti, que estás construyendo tu camino en un
        nuevo país. Sabemos lo difícil que puede ser acceder a servicios
        bancarios tradicionales, ¡pero no te preocupes más! Estamos aquí para
        respaldarte y hacerte la vida más fácil.
      </Text>
      <Text
        style={{
          fontSize: 20,
          paddingHorizontal: 20,
          textAlign: "justify",
          color: "blue",
        }}
      >
        Con nuestra aplicación, podrás abrir tu cuenta bancaria sin
        complicaciones, además de acceder a una amplia gama de servicios
        financieros diseñados pensando en ti. Desde transferencias
        internacionales hasta herramientas de ahorro y préstamos adaptados a tus
        necesidades, estamos comprometidos a ser tu apoyo en este viaje.
      </Text>

      <TouchableOpacity
onPress={() => {
  if (!authenticated) {
    navigation.navigate("login");
  }
}}
disabled={authenticated}        style={{
          backgroundColor: "#525fe1",
          padding: 15,
          width: "50%",
          marginTop: 40,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "white",
          }}
        >
          {authenticated ? "Explora Remitplus" : "¡Regístrate Ahora!"}
        </Text>
      </TouchableOpacity>
      <FontAwesome
        style={{
          paddingTop: 10,
          height: 80,
          width: 50,
        }}
        name="arrow-down"
        size={55}
        color="#525fe1"
      />
      <Text
        style={{
          fontSize: 20,
          padding: 20,
          textAlign: "center",
          color: "blue",
        }}
      >
        ¡Y descubre cómo podemos ayudarte a alcanzar tus metas financieras
        mientras construyes tu nuevo hogar!
      </Text>
    </View>
  );
};

export default Home;
