import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native-web';

const LoginScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    const correctUsername = 'usuario';
    const correctPassword = 'senha';
    const enteredUsername = 'usuario';
    const enteredPassword = 'senha';

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
      navigation.navigate('Home'); 
    } else {
      alert('Login failed. Please check your username and password.');
    }
  };
  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  }

  return (
    <ImageBackground source={require('./img/estadio.jpg')}>
    <View style={styles.loginContainer}>
      
       <View style={styles.profileImage}> 
       <Image style={styles.roundedImage} source={require('./img/pngfind.com-bite-mark-png-631239.png')} />
      </View>
      <View style={styles.loginCard}>
        <Text style={styles.loginTitle}>Login</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputField} placeholder="username" />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputField} placeholder="password" secureTextEntry />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CadastroButton} onPress={handleCadastro}>
          <Text style={styles.CadastroButtonText}>Clique aqui para se cadastrar no nosso site!!</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(to bottom, #3498db, #2980b9)',
  },

  profileImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  roundedImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  loginCard: {
    backgroundColor: '#faebd7',
    borderColor: 'black',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    padding: 30,
    width: 350,
  },
  loginTitle: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  inputField: {
    width: '100%',
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#27ae60',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  CadastroButton: {
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  CadastroButtonText: {
    color: 'black',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;