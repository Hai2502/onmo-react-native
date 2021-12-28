import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import logo from '../../../assets/logo.jpg'
import gg from '../../../assets/gg.png'

const WelcomeScreen = () => {
  const navigation = useNavigation();
 return (
    <View style={styles.container}>
      <View style ={styles.head}>

          <Image source={logo} style={{width: 82, height: 33, marginBottom: 30}}/>
          <Text style={styles.welcome}>Welcome to ONMO</Text>
          <Text style={styles.describe}>Get access to the best game Moments, Battles and Daily Tournaments</Text>       
      </View>
      <View style={styles.login}> 
        <TouchableOpacity style={styles.buttonLogin}  onPress={() => navigation.navigate('Login')}>
          <Image source={gg} style={{width: 24, height: 24, marginLeft: -120,marginRight:100}}/>
          <Text>
            Email
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.foot}>
      <Text>
          By signing up or signing in to an account, you agree to ONMO <Text style={styles.underline}>Terms of Use</Text> and <Text style={styles.underline}>Privacy Policy</Text>
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
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30
  },

  buttonLogin:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: 'rgba(0,0,0, .4)', 
    shadowOffset: { height: 1, width: 1 }, 
    shadowOpacity: 1, 
    shadowRadius: 1,
    elevation: 2, 
    height: 50,
    width: 350,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#333',
    flexDirection: 'row',
  },
  head:{
    flex: 2,
    marginBottom: 30,
    justifyContent: 'space-between',
    justifyContent: 'flex-start'
  },
  login:{
    flex: 1,
  },
  welcome:{
    fontSize: 48,
    lineHeight: 50,
    fontFamily: "sans-serif",
    fontWeight: 400
  },
  describe:{
    fontSize: 18,
    lineHeight: 18,
    fontFamily: "sans-serif",
    letterSpacing: 0.2,
    marginTop: 15
  },
  underline:{
    textDecorationLine: "underline"
  },
  foot:{
    flex:1,
    justifyContent: 'flex-end',
    textAlign: 'center',
    
  }
  
})

export default WelcomeScreen