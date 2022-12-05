import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ComaprisonScreen from './Screens/ComparisonScreen';
import DataScreen from './Screens/DataScreen';
import GrapheScreen from './Screens/GrapheScreen';
import Details from './Screens/DetailsScreen';
import IconButton from './components/iconButton';
import { Colors, GlobalStyles } from './constants/colors';
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar style="light" />
       <NavigationContainer>
        <Stack.Navigator  screenOptions={{
        headerStyle: {backgroundColor:GlobalStyles.colors.primary800 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor:GlobalStyles.colors.primary700 },
        statusBarColor:'black',
      }}>
          
          <Stack.Screen name="DataScreen" component={DataScreen}  options={{
            title:'data screen',
            headerRight: ({tintColor}) => <IconButton icon="md-information-circle-outline" color={tintColor} size={30} />
          }} />
          <Stack.Screen name="ComaprisonScreen" component={ComaprisonScreen}/>
          <Stack.Screen name="GrapheScreen" component={GrapheScreen}/>  
          <Stack.Screen name='DetailsScreen' component={Details} />
        </Stack.Navigator>
       </NavigationContainer>
    </>
  );
}


