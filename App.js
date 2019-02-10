import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import LocaleScreen from './LocaleScreen.js';
import FoodScreen from './FoodScreen.js';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Locale: {screen: LocaleScreen},
  Food: {screen: FoodScreen},
})

const App = createAppContainer(MainNavigator);

export default App;
