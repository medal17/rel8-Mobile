import { View, SafeAreaView, Text, FlatList, TextInput, Pressable } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NewsCard from '../../components/News/NewsCard'
import Feather from 'react-native-vector-icons/Feather'
import Ionicon from 'react-native-vector-icons/Ionicons'
import TobBar from '../../components/topBar'
import ExcoCard from '../../components/Publication/ExcoCard'

const Exco = ({navigation}) => {
    const data =[
      {id:1,title: 'MD Abubakar ', company:'Blaid Group  MD/ CEO', portfolio:'Chairman', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
      {id:2,title: 'MD Abubakar ', company:'Blaid Group  MD/ CEO', portfolio:'Chairman', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
      {id:3,title: 'MD Abubakar ', company:'Blaid Group  MD/ CEO', portfolio:'Chairman', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
      {id:4,title: 'MD Abubakar ', company:'Blaid Group  MD/ CEO', portfolio:'Chairman', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
      {id:5,title: 'MD Abubakar ', company:'Blaid Group  MD/ CEO', portfolio:'Chairman', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
      {id:6,title: 'MD Abubakar ', company:'Blaid Group  MD/ CEO', portfolio:'Chairman', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
      {id:7,title: 'MD Abubakar ', company:'Blaid Group  MD/ CEO', portfolio:'Chairman', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../../images/onboarding/phone.png')},
       
      ]
  return (
    <SafeAreaView style={tw`px-2`}>
      <TobBar
        body={
          <View style={tw`flex-row justify-between px-3`}>
              <Ionicon name='ios-chevron-back' onPress={()=>navigation.goBack()} size={30}/>
              <Text style={tw`my-auto font-bold text-base`}>Excos</Text>
              <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30}/>
          </View>
        }
        />
      <View style={tw`flex-row mx-4 justify-between bg-purple-100 my-3 rounded-lg py-2  px-2`}> 
        <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search by date'
          style={tw`w-9/12`}
        />
        <Feather name='sliders' style={tw`my-auto`} size={20} color='purple'/>
      </View>
      <View style={tw` flex-row mt-0 `}>
        <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            numColumns={2}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={tw`h-60`}/>}
            renderItem={
                ({item}) => (
                  <ExcoCard 
                    image={item.picture}
                    head={item.title}
                    portfolio={item.portfolio}
                    company={item.company}
                    body={item.body}
                    navigation={navigation}
                    // to='viewExco'
                  />
                  )}/>
        </View>
    </SafeAreaView>
  )
}

export default Exco