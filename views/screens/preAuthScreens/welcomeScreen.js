import React, { useState, useContext } from 'react';
import AuthContext from '../../../context/authContext/AuthContext'
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Accounts from '../../../models/auth/data.json'


const WelcomeScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { onAuthentication } = useContext(AuthContext)

  const onUserAuthentication = () => {
    const authInfo = Accounts.find((element) => {
      return element.email == email && element.password == password
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
      <Text style={styles.header}>LOGIN</Text>
      <View>
        <TextInput
          style={styles.inputs}
          placeholder="Enter your email here.."
          value={email}
          onChangeText={(value) => onInputChange(value, setEmail)}
        />
        <TextInput
          style={styles.inputs}
          secureTextEntry={true}
          placeholder="Enter your password here.."
          value={password}
          onChangeText={(value) => onInputChange(value, setPassword)}
        />
        <Button style={styles.buttonLogin}  title="AUTHENTICATE" onPress={onUserAuthentication} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30
  },
  inputs: {
    width: 300,
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 8
  },
  buttonLogin:{
    borderRadius: 15
  }
})

export default WelcomeScreen