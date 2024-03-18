// import {StyleSheet, Text, TextInput, View, useColorScheme} from 'react-native';
// import colors from './colors';
// const App = () => {
//   const colorScheme = useColorScheme();

//   const chosenColors = colorScheme === 'dark' ? colors.dark : colors.light;

//   return (
//     <View
//       style={[styles.container, {backgroundColor: chosenColors.lightwhite}]}>
//       <Text style={[styles.text, {color: chosenColors.lightpink}]}>Login</Text>
//       <TextInput
//         style={[styles.textinput, {backgroundColor: chosenColors.maroon}]}
//         placeholder="Name"
//         placeholderTextColor={chosenColors.placeholder}></TextInput>
//       <TextInput
//         style={[styles.textinput, {backgroundColor: chosenColors.maroon}]}
//         placeholder="Email"
//         placeholderTextColor={chosenColors.placeholder}></TextInput>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   text: {
//     marginTop: 90,
//     fontSize: 40,
//   },
//   textinput: {
//     width: 350,
//     marginTop: 50,
//     paddingLeft: 25,
//     borderRadius: 10,
//   },
// });

// export default App;

import React, { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ThemeContext } from './colors';
import HomeCard1 from './app/components/HomeCard1';
import Createown from './app/screens/Createown';

export const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: theme.backgroundColor, flex: 1 }}>
      <Text style={{ color: theme.textColor }}>Welcome to my app!</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={{ color: theme.textColor }}>Toggle Theme</Text>
      </TouchableOpacity>
      <Createown/>
    </View>
  );
};