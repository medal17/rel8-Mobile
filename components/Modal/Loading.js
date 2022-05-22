import React, {useState} from 'react'
import {Text, View, ActivityIndicator} from 'react-native'
import tw from 'tailwind-react-native-classnames';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

import RoundedButton from '../button/RoundedButton';

export default function Loading(props) {
    const [loading, setLoading] = useState(null)
    const navigation = useNavigation()
    const cancel=()=>{
        // navigation.goBack()
        props.setVisible(false)
        navigation.navigate('login')
    }
    
    // setTimeout(
    //   function() {
    //     // props.navigation.navigate(props.to)
    //     props.to()
    //    props.setLoadVisible(false)
    //   }, 1500);
   
      // const handleclose =()=>{
      //   props.setVisi
      // }
  return (
    !props.success ?
    <View style={tw`bg-white w-7/12 m-auto rounded-lg py-6 px-6`}>
        <ActivityIndicator color='purple' size='large' />
        {props.name ? <Text style={tw`text-center py-3 text-sm`}  >Taking you to {props.name}</Text>:<></>}
    </View>
    :<View>
      <Ionicon style={tw` mx-auto text-purple-900`} name='md-checkmark-circle' size={50}/>
      <Text style={tw`mx-auto text-base text-gray-500 py-3`}>Account Created </Text>
      <View style={tw`pt-6 w-5/12 mx-auto`}>
          <RoundedButton text='Ok' pressed={()=>cancel()}/>
      </View>
    </View>
  )
}
