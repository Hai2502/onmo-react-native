import "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './views/navigation/AppNavigator';
import AuthState from './context/authContext/AuthState';

export default function App() {
  return (
    <AuthState>
      <AppNavigator />
    </AuthState>
  );
}


// import React from 'react';
// import 'react-native-gesture-handler';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Dashboard from './components/dashboard';
// import Login from './components/login'

// const Stack = createStackNavigator();

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
      
//     }

//   }
//   render() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name='login' component={Login}/>
//           <Stack.Screen name='dashboard' component={Dashboard}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
 
//   title: {
//     marginBottom: 40,
//     fontSize: 30,
//     fontWeight: 'bold'
//   },
 
//   inputView: {
//     backgroundColor: "#9ebae6",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
 
//     alignItems: "center",
//   },
 
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },
 
//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },
 
//   loginBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#5585d4",
//   },
// });