/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ThemeProvider} from './app/Context/ThemeContext';

AppRegistry.registerComponent(appName, () => ThemeProvider);
