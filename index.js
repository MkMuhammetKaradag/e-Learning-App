/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Wrapper from './src/Wrapper';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => Wrapper);
