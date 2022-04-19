import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { StyleSheet, Image,Text,SafeAreaView, Pressable,View } from 'react-native';
import tw from 'tailwind-react-native-classnames';

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
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Home from './pages/home';
import Gallery from './pages/Gallery/gallery';
import ViewGallery from './pages/Gallery/viewGallery';
import News from './pages/News';
import ViewNews from './pages/News/viewNews';
import Events from './pages/Events';
import ViewEvent from './pages/Events/viewEvent';
import Chat from './pages/Chat';
import PrivateSingle from './pages/Chat/privateSingle';
import MyAccount from './pages/MyAccount';
import { Members } from './pages/members';
import {ViewMember} from './pages/members/ViewMember' 

// import DrawerContent from './components/drawer/drawerContent';
import { createDrawerNavigator , DrawerItem,DrawerContentScrollView} from '@react-navigation/drawer';
import Logout from './components/Modal/Logout';
import Subscribe from './pages/subscription';
import Support from './pages/support';
import Elections from './pages/election';
import ExpandableViewSeparate from './components/support/ExpadableView';
import CustomDrawerList from './components/support/drawer';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// const navigationRef =useNavigation()


const TabScreen =()=>{
  return(
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
          component={MyAccount} 
          options={{
          tabBarLabel: 'My Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="account-balance-wallet" size={23} color={color}  />
          ),
        }}/>

        <Tab.Screen name='members' 
          component={Members} 
          options={{
          tabBarLabel: 'Members',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="groups" size={25} color={color}  />
          ),
        }}/>
        

    </Tab.Navigator>)
}

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       {getExpandableView(props)}
//       <DrawerItem
//         label="Help"
//         onPress={() => navigationRef.navigate('login')}
//       />
//     </DrawerContentScrollView>
//   );
// }

function getExpandableView(props){
  return (
      <ExpandableViewSeparate navObj={props.navigation}/>
    );
};

function MeriApp() {
  return (
    <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
    {/* screens */}
    <Drawer.Screen name="Permission1" component={Login} />
    <Drawer.Screen name="Permission2" component={Login}  />
    </Drawer.Navigator>
    </NavigationContainer>
  )}

  function CustomDrawerContent(props) {
    return (
        <SafeAreaView style={{flex:1}}>
            <DrawerItem
        label="Help"
        onPress={() => props.navigation.navigate('login')}
      />
            <View style={{flex:1,justifyContent: 'flex-end'}}>
            <Text>made with love</Text></View>
        </SafeAreaView>
    );
  }


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
        <Stack.Screen name='private-single' component={PrivateSingle}/>  
        <Stack.Screen name='account' component={MyAccount}/>
        <Stack.Screen name='events' component={Events}/>  
        <Stack.Screen name='viewEvents' component={ViewEvent}/>  
        
        <Stack.Screen name='view-member' component={ViewMember}/>

        {/* <Stack.Screen name='meri'>
        {()=>(
          <MeriApp/>
        )}</Stack.Screen> */}
        
        <Stack.Screen name='dashboard'>
        {()=>(
          <Drawer.Navigator  initialRouteName='HomeScreen' drawerContent={props => <CustomDrawerList {...props} />} >
            <Drawer.Screen 
              name="Picture" 
              options={{drawerLabel:'',  drawerIcon: ({focused, size}) => (
                <View style={tw`border-b  flex-row justify-around border-gray-400 py-4 w-full`}>
                  
                  <Image style={tw`h-20 w-20 rounded-full `} source={require('./images/onboarding/phone.png')}/>
                  <View style={tw`my-auto`}>
                    <Pressable>
                      <Text style={tw`py-1`}>Member Platform</Text>
                    </Pressable>
                    
                    <Text style={tw`py-1`}>Exco Platform</Text>
                    <Text style={tw`py-1`}>Committee Platform</Text>
                  </View>
                </View>
             ),}} 
              component={TabScreen} 
            />
            {/* <Image source={require('./images/onboarding/phone.png')}/> */}
            <Drawer.Screen 
              name="HomeScreen" 
              options={{drawerLabel:'Home',drawerIcon: ({focused, size}) => (
                <Ionicon
                   name="md-home"
                   size={size}
                   color={focused ? '#7F02A2' : '#c4c4c4'}
                />
             ),}} 
              component={TabScreen} 
            />

            <Drawer.Screen 
              name="event" 
              options={{drawerLabel:'Events',drawerIcon: ({focused, size}) => (
                 <MaterialIcon name='event-available' style={tw`text-center pb-2`} color={focused ? '#7F02A2' : '#C4C4C4'} size={size}/>
             ),}} 
              component={Events} 
            />

            <Drawer.Screen 
              name="News" 
              options={{drawerLabel:'News',drawerIcon: ({focused, size}) => (
                <MaterialCom name="message-alert" size={size} color={focused ? '#7F02A2' : '#C4C4C4'}
                />
             ),}} 
              component={News} 
            />
            <>
                {MeriApp}
                {/* <Text>yo</Text> */}
            </>

            <Drawer.Screen 
              name="//" 
              
              options={{ drawerLabel:'Resources',drawerIcon: ({focused, size}) => (
                <Ionicon
                   name="ios-file-tray-full" size={size} color={focused ? '#7F02A2' : '#c4c4c4'}/>),}} 
              component={MeriApp} 
              // drawerContent={props => <CustomDrawerContent {...props} />}
            />

            <Drawer.Screen 
              
              name="gallery" options={{ drawerLabel:'Gallery',drawerIcon: ({focused, size}) => (
                <FontAwesome name="photo" size={size} color={focused ? '#7F02A2' : '#c4c4c4'}
                /> ),}} component={Gallery} 
            />
            <Drawer.Screen 
              name="election" 
              options={{drawerLabel:'Elections',drawerIcon: ({focused, size}) => (
                <MaterialIcon name="how-to-vote" size={size} color={focused ? '#7F02A2' : '#c4c4c4'}
                /> ),}} component={Elections} 
            />
            <Drawer.Screen 
              name="subscribe" 
              options={{drawerLabel:'Subscription',drawerIcon: ({focused, size}) => (
                <MaterialIcon name="subscriptions" size={size} color={focused ? '#7F02A2' : '#c4c4c4'}
                /> ),}} component={Subscribe} 
            />

            <Drawer.Screen 
              name="support" 
              options={{drawerLabel:'Support',drawerIcon: ({focused, size}) => (
                <MaterialIcon
                   name="headset-mic"
                   size={size}
                   color={focused ? '#7F02A2' : '#c4c4c4'}
                />
             ),}} 
              component={Support} 
            />

            <Drawer.Screen 
              name="/" 
              options={{drawerLabel:'Logout',drawerIcon: ({focused, size}) => (
                <>
                {focused ? <Logout/>:<></>}
                <MaterialIcon name="logout" size={size} color={focused ? '#7F02A2' : '#c4c4c4'}
                /></> ),}} component={TabScreen} 
            />
          </Drawer.Navigator>)}
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
