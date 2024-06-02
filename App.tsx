import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabsNavigator from '@/navigation/BottomTabsNavigator';
import Header from './components/Header';


const App = () =>  {

  const [loaded, error] = useFonts({
    Poppins: require('@/assets/fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold: require('@/assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('@/assets/fonts/Poppins-Bold.ttf'),
  })

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      //SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

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