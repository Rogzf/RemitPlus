import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import appFirebase from "../Credentials";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(appFirebase);

const Login = (props) => {
  //estados.
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [register, setRegister] = useState(false);

  const handleButtonPress = () => {
    if (register) {
      registerUser();
    } else {
      logIngUser();
    }
  };

  const logIngUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("iniciando sesion");
      props.navigation.navigate("Solicitud"); //redirecciona a pagina a screen al iniciar la sesion.
    } catch (error) {
      console.log(error);
      Alert.alert("Correo o contraseña Invalida");
    }
  };

  const registerUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Usuario registrado exitosamente");
      setRegister(false);
    } catch (error) {
      console.log(error);
      Alert.alert("Error al registrar usuario");
    }
  };
  return (
    <KeyboardAvoidingView
      style={style.containerKeyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // evita q el teclado cubra el input password.
    >
      <View style={style.container}>
        <View>
          <Image
            source={require("../assets/virtualbank.jpeg")}
            style={style.loginImg}
          />
        </View>
        <View style={style.containerInput}>
          <View>
            <TextInput
              style={style.input}
              placeholder="correo@gmail.com"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View>
            <TextInput
              style={style.input}
              placeholder="password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={style.button} onPress={handleButtonPress}>
              <Text style={{ color: "white" }}>
                {register ? "Registrarse" : "Iniciar Sesion"}
              </Text>
            </TouchableOpacity>
          </View>
          {!register && (
            <TouchableOpacity onPress={() => setRegister(true)}>
              <Text style={{ color: "blue", marginTop: 10 }}>
                ¿No estas registrado? Registrate aqui
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  containerKeyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerInput: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loginImg: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginBottom: 10,
  },
  input: {
    width: 250,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#cccccc40",
    borderRadius: 30,
    marginVertical: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#525fe1",
    color: "white",
    borderRadius: 30,
    paddingVertical: 10,
    width: 100,
    marginTop: 10,
  },
});

export default Login;
