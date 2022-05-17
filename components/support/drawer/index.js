import React, {useState} from 'react';
import { View, Image,SafeAreaView, Text, ScrollView, Switch, Pressable } from 'react-native';
import { DrawerItem} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames';
import Logout from '../../Modal/Logout';
import ModalTemplate from '../../Modal';
import Loading from '../../Modal/Loading';


const handlePress=(props)=>{
    props.navigation.toggleDrawer()
    props.navigation.navigate(props.to)
    props.setSelected(props.id)
}

const DrawerButton =(props)=>{
    return(
        <DrawerItem activeTintColor='purple'
            key={props.id}
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
    const [showComiittee, setShowCommittee] = useState(false)
    const [directory, setDirectory] =useState({member:true, exco:false,comm:false})
    const [loadVisible, setLoadVisible] = useState(false)
    const [loadMessage, setLoadMessage] = useState('')
    const drawerData=[
        // {id:1, label:'Home', to:'dashboard', icon:<Ionicon name='md-home' size={22} color={'grey'}/>},
        {id:2, label:'Events', to:'events', icon:(<MaterialIcon name='event-available' style={tw`text-center `} color={'grey'} size={22}/>)},
        {id:3, label:'News', to:'news', icon:<MaterialCom name="message-alert" size={22} color={'grey'}
        />}
    // {id:9, label:'Logout', to:'subscribe'},
    ]

    const drawerData2 =[
        {id:5, label:'Gallery', to:'gallery', icon:<FontAwesome name="photo" size={22} color={'grey'}
        /> },
        {id:6, label:'Election', to:'election', icon:<MaterialIcon name="how-to-vote" size={22} color={'grey'}
        />},
        {id:7, label:'Subscribe', to:'subscribe', icon:<MaterialIcon name="subscriptions" size={22} color={'grey'}
        />},
        {id:8, label:'Support', to:'support', icon:<MaterialIcon name="headset-mic" size={22} color={'grey'}/>},
        {id:15, label:'About', to:'about', icon:<MaterialIcon name="info" size={22} color={'grey'}
     /> },
    ]

    const options =[
        {id:9, label:'Our Excos', to:'exco'},
        {id:10, label:'Publications', to:'publication'},
        {id:11, label:'Minutes', to:'minutes'},  
    ]

    const committeeList =[
        {id:16, label:'Welfare Committee', to:'exco'},
        {id:17, label:'Planning Committee', to:'publication'},
    ]

    const handleSub=(to)=>{
        navigation.toggleDrawer()
        navigation.navigate(to)
        // props.setSelected(props.id)
    }

    const handleSwitch=(val)=>{
        if(val==1){
            setDirectory({member:true, exco:false, comm:false})
            navigation.navigate('Home',{type:'member'})

            setSelected(0)

        }else if(val==2){
            setDirectory({member:false, exco:true, comm:false})
            navigation.navigate('Home',{type:'exco'})
            setSelected(0)

        }else{
            setDirectory({member:false, exco:false, comm:true})
            setSelected(0)
            setShowCommittee(!showComiittee)
        }
    }

    const handleCommitteeSub =(message)=>{
        setLoadMessage(message)
        setShowCommittee(false)
        navigation.toggleDrawer();
        setLoadVisible(true)
    }



  return (
        <SafeAreaView style={{flex:1}}>
            
             <ModalTemplate 
                visible={visible}
                body={<Logout setVisible={setVisible}/>}
                />
            
            <ModalTemplate 
                visible={loadVisible}
                body={<Loading 
                    setLoadVisible={setLoadVisible} 
                    navigation={navigation} 
                    name={loadMessage} 
                    to={()=>navigation.navigate('Home',{type:'committee'})}
                    />}
            /> 
            <View style={tw`border-b  flex-row justify-around border-gray-400 mx-4 py-4 mb-6 w-10/12`}>
                  
                  <Image style={tw`h-10 `} source={require('../../../images/Logo/r8Logo.png')}/>
            </View>
            <ScrollView>

            <Pressable onPress={()=>handleSwitch(1)} style={tw` justify-between flex-row mx-5`}>
                <View style={tw`flex-row`}>
                    <MaterialIcon name='groups' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                    <Text style={tw`my-auto`}>Members Zone</Text>
                </View>
                <Switch value={directory.member} style={tw`my-auto`} />
            </Pressable>

            <Pressable onPress={()=>handleSwitch(2)} style={tw`my-1 flex-row justify-between mx-5`}>
                <View style={tw`flex-row`}>
                    <Ionicon name='person' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                    <Text style={tw`my-auto`}>Excos Zone</Text>
                </View>
                <Switch value={directory.exco} style={tw`my-auto`} />
            </Pressable>

            <Pressable onPress={()=>handleSwitch(3)} style={tw`my-1 flex-row justify-between mx-5`}>
                <View style={tw`flex-row`}>
                    <Ionicon name='people' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                    <Text style={tw`my-auto`}>Committee Zone</Text>
                </View>
                <Switch value={directory.comm} style={tw`my-auto`} />
               
            </Pressable>
             { showComiittee ? committeeList.map(e=>
            <Pressable key={e.id} onPress={()=>handleCommitteeSub(e.label)} style={tw`w-full ml-12 my-1`}>
                <Text style={tw`text-gray-600 ml-7`}>{e.label}</Text>
            </Pressable>):<></>}
            
            { drawerData.map(e=>
            
                <DrawerButton
                    label={e.label}
                    navigation={navigation}
                    id={e.id}
                    key={e.id}
                    to={e.to}
                    setSelected={setSelected}
                    selected={selected}
                    bg={selected == e.id ?'bg-purple-200':''}
                    icon={e.icon}
                />)}
            
            
            <Pressable onPress={()=>setshowDropdown(!showDropdown)} style={tw`my-4 flex-row mx-5`}>
                <Ionicon name='ios-file-tray-full' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                <Text style={tw`text-gray-500`}>Resources</Text>
                <Ionicon name={showDropdown?'md-caret-up-outline':'md-caret-down-outline'} style={tw` my-auto px-2 text-gray-400`}/>
            </Pressable>
            { showDropdown ? options.map(e=>
            <Pressable key={e.id} onPress={()=>handleSub(e.to)} style={tw`w-full ml-12 my-1`}>
                <Text style={tw`text-gray-600`}>{e.label}</Text>
            </Pressable>):<></>}

            { drawerData2.map(e=>
            <DrawerButton
                label={e.label}
                navigation={navigation}
                id={e.id}
                key={e.id}
                to={e.to}
                setSelected={setSelected}
                selected={selected}
                bg={selected == e.id ?'bg-purple-200':''}
                icon={e.icon}
            />)}
            
            <Pressable onPress={()=>setVisible(true)} style={tw`my-4 flex-row mx-5`}>
                <MaterialIcon name='logout' style={tw`mr-8 my-auto text-gray-500`} size={22} />
                <Text>Logout</Text>
            </Pressable>
            </ScrollView>
            {/* s */}
        </SafeAreaView>
  );
}
