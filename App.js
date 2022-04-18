import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingPage from './pages/onbarding';
import 'react-native-gesture-handler';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPassword from './pages/forgotPasword';
import MailSent from './pages/mailSent';
import ConfirmCode from './pages/confirmCode';
import SetNewPassword from './pages/setNewPassword';
import PasswordChanged from './pages/passwordChanged';
import AccountCreated from './pages/accountCreated';
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Home from './pages/home';
import Gallery from './pages/Gallery/gallery';
import ViewGallery from './pages/Gallery/viewGallery';
import News from './pages/News';
import ViewNews from './pages/News/viewNews';
import Events from './pages/Events';
import ViewEvent from './pages/Events/viewEvent';
import Chat from './pages/Chat';

// import DrawerContent from './components/drawer/drawerContent';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="home" component={OnboardingPage} />  
        <Stack.Screen name='login' component={Login}/>  
        <Stack.Screen name='register' component={Register}/>  
        <Stack.Screen name='forgotPassword' component={ForgotPassword}/>  
        <Stack.Screen name='mailSent' component={MailSent}/>  
        <Stack.Screen name='confirmCode' component={ConfirmCode}/>  
        <Stack.Screen name='setNewPassword' component={SetNewPassword}/>  
        <Stack.Screen name='changedPassword' component={PasswordChanged}/>  
        <Stack.Screen name='accountCreated' component={AccountCreated}/>  
        <Stack.Screen name='gallery' component={Gallery}/>  
        <Stack.Screen name='viewGallery' component={ViewGallery}/>  
        <Stack.Screen name='news' component={News}/>  
        <Stack.Screen name='viewNews' component={ViewNews}/>  

        <Stack.Screen name='events' component={Events}/>  
        <Stack.Screen name='viewEvents' component={ViewEvent}/>  


        <Stack.Screen name='dashboard'>
        {()=>(
        <Tab.Navigator  backBehavior='' 
              screenOptions={
                {headerShown:false, tabBarShowLabel:true,
                tabBarActiveTintColor:'#053B8D', 
                tabBarInactiveTintColor:'#C4C4C4',
                tabBarStyle:{
                  shadowColor:'#fff'
                }
                } } >

                 <Tab.Screen name='Home' 
                  component={Home} 
                  options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                    <Ionicon name="home" size={23} color={color}  />
                  ),
                }}/>

                <Tab.Screen name='chat' 
                  component={Chat} 
                  options={{
                  tabBarLabel: 'Chat',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcon name="chat-bubble" size={23} color={color}  />
                  ),
                }}/>
                
                <Tab.Screen name='account' 
                  component={Home} 
                  options={{
                  tabBarLabel: 'My Account',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcon name="account-balance-wallet" size={23} color={color}  />
                  ),
                }}/>

                <Tab.Screen name='members' 
                  component={Home} 
                  options={{
                  tabBarLabel: 'Members',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcon name="groups" size={25} color={color}  />
                  ),
                }}/>

                </Tab.Navigator>)}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
