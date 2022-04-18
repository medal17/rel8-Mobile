import { View,FlatList, TextInput, Text, Pressable } from 'react-native'
import React from 'react'
import GalleryCard from '../../components/Gallery/GalleryCard'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import tw from 'tailwind-react-native-classnames'


const Gallery = ({navigation}) => {
  const data =[
    {title:'Monthly Exco Meeting', image:require('../../images/onboarding/phone.png')},
    {title:'Monthly Exco Meeting', image:require('../../images/onboarding/phone.png')},
    {title:'Monthly Exco Meeting', image:require('../../images/onboarding/phone.png')},
  ]
  return (
    <View style={tw`px-4`}>
      <Text>gallery</Text>

      <View style={tw`flex-row bg-purple-100 my-3 rounded-lg py-2  px-2`}> 
        <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search by date'
          style={tw`w-9/12`}
        />
        <Feather name='sliders' style={tw`my-auto`} size={20} color='purple'/>
      </View>
      {/* <Galler */}
      <FlatList
        data={data}
        keyExtractor={ (item, index) => item.id }
        // contentContainerStyle={styles.container}
        numColumns={2}
        // style={tw`bg-red-300 w-full`}
        // scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        // contentOffset={1}
        renderItem={
            ({item}) => (
              <Pressable style={tw`w-1/2`}  onPress={()=>navigation.navigate('viewGallery')}>
                <GalleryCard
                  image={item.image}
                  head={item.title}
                  navigation ={navigation}
                />
              </Pressable>)}
      />
    </View>
  )
}

export default Gallery