/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import { ThemeProvider } from './Themeprovider';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ThemeProvider);
