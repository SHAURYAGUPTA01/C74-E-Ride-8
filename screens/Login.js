import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView
} from "react-native";

import firebase from "firebase";
import db from "../config";

const bgImage = require("../assets/background1.png");
const appIcon = require("../assets/appIcon.png");

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("BottomTab");
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.upperContainer}>
          <Image source={appIcon} style={styles.appIcon} />
          <Text style={styles.title}>E-ride</Text>
          <Text style={styles.subtitle}>A Eco-Friendly Ride</Text>
        </View>
        <View style={styles.lowerContainer}>
          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Enter Email"}
            placeholderTextColor={"#FFFFFF"}
            autoFocus
          />
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Enter Password"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />
          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => this.handleLogin(email, password)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue"
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    width: 170,
    height: 170,
    resizeMode: "contain",
    marginTop: 30
  },
  title: {
    fontSize: 40,
    fontFamily: "Rajdhani_600SemiBold",
    paddingTop: 20,
    color: "black"
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Rajdhani_600SemiBold",
    color: "black"
  },
  lowerContainer: {
    flex: 0.5,
    alignItems: "center"
  },
  textinput: {
    width: "40%",
    height: 55,
    padding: 10,
    borderColor: "red",
    borderWidth: 3,
    borderRadius: 10,
    marginTop:40,
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Rajdhani_600SemiBold",
    backgroundColor: "red"
  },
  button: {
    width: "30%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "black"
  },
  buttonText: {
    fontSize: 24,
    color: "black",
    fontFamily: "Rajdhani_600SemiBold"
  }
});
