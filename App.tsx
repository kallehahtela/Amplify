import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabsNavigator from '@/navigation/BottomTabsNavigator';
import Header from './components/Header';

const App = () =>  {
  return (
    <>
      <NavigationContainer>
        <StatusBar style='dark' />
          <Header />
          <BottomTabsNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;