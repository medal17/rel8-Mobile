import React, {useState} from 'react';
import { View, Image,SafeAreaView, Text, Pressable } from 'react-native';
import { DrawerItem} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames';
import Logout from '../../Modal/Logout';
import ModalTemplate from '../../Modal';


const handlePress=(props)=>{
    props.navigation.toggleDrawer()
    props.navigation.navigate(props.to)
    props.setSelected(props.id)
}

const DrawerButton =(props)=>{
    return(
        <DrawerItem activeTintColor='purple'
            style={tw`${props.bg}`}
                label={props.label}
                onPress={() => handlePress(props)}
                icon={({ focused, color, size }) => (props.icon) }
            />
    )
}
export default function CustomDrawerList({navigation}) {
    // const navigation = useNavigation();
    const [selected, setSelected] = useState(1)
    const [visible, setVisible] = useState(false)
    const [showDropdown, setshowDropdown] = useState(false)
    const drawerData=[
        {id:1, label:'Home', to:'dashboard', icon:<Ionicon name='md-home' size={22} color={ id==selected ?'red': 'grey'}/>},
        {id:2, label:'Events', to:'events', icon:(<MaterialIcon name='event-available' style={tw`text-center `} color={ id==selected ?'red': 'grey'} size={22}/>)},
        {id:3, label:'News', to:'news', icon:<MaterialCom name="message-alert" size={22} color={id==selected ?'red': 'grey'}
        />}
    // {id:9, label:'Logout', to:'subscribe'},
    ]

    const drawerData2 =[
        {id:5, label:'Gallery', to:'gallery', icon:<FontAwesome name="photo" size={22} color={id==selected ?'red': 'grey'}
        /> },
        {id:6, label:'Election', to:'election', icon:<MaterialIcon name="how-to-vote" size={22} color={id==selected ?'red': 'grey'}
        />},
        {id:7, label:'Subscribe', to:'subscribe', icon:<MaterialIcon name="subscriptions" size={22} color={id==selected ?'red': 'grey'}
        />},
        {id:8, label:'Support', to:'support', icon:<MaterialIcon name="headset-mic" size={22} color={id==selected ?'red': 'grey'}
     /> },
    ]

    const options =[
        {id:1, label:'Exco', to:'excos'},
        {id:2, label:'Publications', to:'publication'},
        {id:3, label:'Minutes', to:'minutes'},
       
    ]

    const handleSub=(to)=>{
        navigation.toggleDrawer()
        navigation.navigate(to)
        // props.setSelected(props.id)
    }
  return (
        <SafeAreaView style={{flex:1}}>
             <ModalTemplate 
                visible={visible}
                body={<Logout setVisible={setVisible}/>}
                />
            <View style={tw`border-b  flex-row justify-around border-gray-400 mx-4 py-4 mb-6 w-10/12`}>
                  
                  <Image style={tw`h-20 w-20 rounded-full `} source={require('../../../images/onboarding/phone.png')}/>
                  <View style={tw`my-auto`}>
                    <Pressable>
                      <Text style={tw`py-1 text-base font-bold`}>Rasheed Johnson</Text>
                      <Text style={tw`py-0.5`}> Member Platform</Text>
                    </Pressable>
                    
                    
                  </View>
            </View>
            { drawerData.map(e=>
            
                <DrawerButton
                    label={e.label}
                    navigation={navigation}
                    id={e.id}
                    to={e.to}
                    setSelected={setSelected}
                    selected={selected}
                    bg={selected == e.id ?'bg-purple-200':''}
                    icon={e.icon}
                />)}
            
            <DrawerItem
                label="Resources"
                onPress={() => setshowDropdown(!showDropdown)}
                // icon={<Ionicon
                //        name="ios-file-tray-full" size={22} color={ '#c4c4c4'}/>}
               
            />
            { showDropdown ? options.map(e=>
            <Pressable onPress={()=>handleSub(e.to)} style={tw`w-full ml-10 my-1`}>
                <Text style={tw`text-gray-600`}>{e.label}</Text>
            </Pressable>):<></>}

            { drawerData2.map(e=>
            <DrawerButton
                label={e.label}
                navigation={navigation}
                id={e.id}
                to={e.to}
                setSelected={setSelected}
                selected={selected}
                bg={selected == e.id ?'bg-purple-200':''}
                icon={e.icon}
            />)}

            <DrawerItem
                label="Logout"
                onPress={() => setVisible(true)
               }
            />
            <View style={{flex:1,justifyContent: 'flex-end'}}>
            <Text>Powered by Tomation</Text></View>
        </SafeAreaView>
  );
}
