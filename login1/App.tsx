import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

const Stack = createStackNavigator();

function LoginScreen() {
  return (
    <ImageBackground source={require('./assets/images/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('./assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>inicie sesión como:</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CLIENTE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>TRABAJADOR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200, // Tamaño del logo aumentado
    height: 200, // Tamaño del logo aumentado
    marginBottom: 50,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    width: '60%',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#004aad',
    fontSize: 16,
  },
});
