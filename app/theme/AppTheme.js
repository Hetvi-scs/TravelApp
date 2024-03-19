import AsyncStorage from '@react-native-async-storage/async-storage';
// import {store} from 'redux-actions';
import {darkTheme, lightTheme} from '.';
export let color = darkTheme;

export const getColors = (theme, colorScheme) => {
  color =
    theme == 'light'
      ? lightTheme
      : theme == 'system'
      ? colorScheme == 'dark'
        ? darkTheme
        : lightTheme
      : darkTheme;
};

// export const fetchStoredTheme = async defaultTheme => {
//   // console.log(':rocket: ~ fetchStoredTheme ~ defaultTheme:', defaultTheme);
//   //   const colorTheme = await store.getState().authReducer.userLoginResponse;
//   const storeValueGet = await AsyncStorage.getItem('theme');
//   try {
//     // const storedTheme = colorTheme?.theme;
//     // if (storedTheme !== 'null' && storedTheme) {
//     //   if (storedTheme != 'system') {
//     //     // console.log('if part');
//     //     color =
//     //       storedTheme === 'dark'
//     //         ? darkTheme
//     //         : storedTheme === 'light'
//     //         ? lightTheme
//     //         : darkTheme; // Default to 'dark' if no theme is stored
//     //   } else {
//     //     // console.log('if else part');
//     //     color =
//     //       defaultTheme == 'light'
//     //         ? lightTheme
//     //         : defaultTheme == 'dark'
//     //         ? darkTheme
//     //         : lightTheme;
//     //   }
//     // } else {
//     if (storeValueGet !== 'null' && storeValueGet) {
//       if (storeValueGet != 'system') {
//         console.log('else if if part');
//         color =
//           storeValueGet === 'dark'
//             ? darkTheme
//             : storeValueGet === 'light'
//             ? lightTheme
//             : darkTheme;
//       } else {
//         // console.log('else if else part');
//         color =
//           defaultTheme == 'light'
//             ? lightTheme
//             : defaultTheme == 'dark'
//             ? darkTheme
//             : darkTheme;
//       }
//     } else {
//       // console.log('else part');
//       color =
//         defaultTheme === 'dark'
//           ? darkTheme
//           : defaultTheme === 'light'
//           ? lightTheme
//           : darkTheme;
//     }
//     // }
//   } catch (error) {
//     color = darkTheme; // Default to 'dark' in case of an error
//   }
// };
