import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import LocaleScreen from './LocaleScreen.js';
import FoodScreen from './FoodScreen.js';
import SettingsScreen from './SettingsScreen.js';
import CreationScreen from './CreationScreen.js';

const MainNavigator = createStackNavigator({
  Creation: {screen: CreationScreen},
  Home: {screen: HomeScreen},
  Locale: {screen: LocaleScreen},
  Food: {screen: FoodScreen},
  Settings: {screen: SettingsScreen},
})

const App = createAppContainer(MainNavigator);

export default App;
