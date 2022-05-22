import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

import TobBar from '../../components/topBar'


const ViewGallery = () => {

  const navigation = useNavigation()
  return (
    <SafeAreaView style={tw`h-full`}>
       <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
              <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
              <Text style={tw`my-auto font-bold text-base`}>Gallery</Text>
              <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30}/>
          </View>
        }
    />
        <View style={tw`h-1/2 p-3`}>
            <Image  
            resizeMode='cover'
            style={tw`h-full w-full rounded-lg`}
            source={require('../../images/onboarding/phone.png')}/>
        </View>
        <View style={tw`px-4 py-2`}>
            <Text style={tw`text-base font-bold text-purple-800 py-1`}>Monthly Exco Meeting</Text>
            <Text style={tw`text-justify text-purple-800 py-1`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et lacus lacus, proin proin egestas. Augue scelerisque pellentesque nullam montes, pretium. Nisl, in netus Et l</Text>
        </View>  
      
    </SafeAreaView>
  )
}

export default ViewGallery