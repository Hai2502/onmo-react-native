import React, { useState, useContext } from 'react';
import AuthContext from '../../../context/authContext/AuthContext'
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Accounts from '../../../models/auth/data.json'
import logo from '../../../assets/logo.jpg'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { onAuthentication } = useContext(AuthContext)

  const onUserAuthentication = () => {
    const authInfo = Accounts.find((element) => {
      return element.email === email && element.password === password
    })
    if (
      authInfo  == null
    ) {
      alert('The email or password is incorrect')
      return
      
    }
    onAuthentication()
    console.log(authInfo)
    console.log(Accounts)
  }

  const onInputChange = (value, setState) => {
    setState(value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image source={logo} style={{width: 190, height: 73, marginTop: 51}}/> 
      </View>

      <View style={styles.inputArea}>
        <Text>Email</Text>
        <TextInput
          style={styles.inputEmail}
          placeholder="Enter your email here.."
          value={email}
          onChangeText={(value) => onInputChange(value, setEmail)}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.inputPassword}
          secureTextEntry={true}
          placeholder="Enter your password here.."
          value={password}
          onChangeText={(value) => onInputChange(value, setPassword)}
        />
        <Text style={styles.Des}>Must contains 8 Characters, One Uppercase, One Lowercase and One Number</Text>
        <TouchableOpacity style={styles.buttonLogin}  onPress={onUserAuthentication}>
          <Text style={{color: '#fff'}}>
            Sign In
          </Text>
        </TouchableOpacity>
        <Text style={styles.underline}>
          Forgor Password?
        </Text>
      </View>

      <View style={styles.footArea}>
        <Text>
          Don't have an account? <Text style={styles.underline}>Sign Up</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20, 
  },

  inputEmail: {
    width: 400,
    height: 54,
    marginBottom: 24,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C0C0C0'
  },
  inputPassword: {
    width: 400,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C0C0C0'
  },
  buttonLogin:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 400,
    backgroundColor: '#C0C0C0',
    flexDirection: 'row',
    color: '#fff',
    borderRadius: 25,
    marginTop: 72,
    marginBottom: 24
  },
  imageArea:{
    flex: 1
  },
  inputArea:{
    flex: 2
  },
  footArea:{
    flex:1,
    justifyContent: 'flex-end',
    textAlign: 'center',
  },
  Des:{
    fontSize: 12,
    marginTop: 4,
    marginLeft: 0,
    color: '@e0e0e0',
    letterSpacing: -0.2
  },
  underline:{
    textDecorationLine: "underline",
    color: '#489f85',
    textAlign: 'center'
  },
  underline1:{
    textDecorationLine: "underline",
    color: '#489f85',
  }

})

export default Login