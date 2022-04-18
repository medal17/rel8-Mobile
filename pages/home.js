import { View, Text, FlatList, ScrollView, Image, StatusBar, Pressable } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { TextInput } from 'react-native-gesture-handler'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import NewsCard from '../components/News/NewsCard'
import TobBar from '../components/topBar'

const Home = ({navigation}) => {
  const data =[
    {id:1,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../images/onboarding/phone.png')},
    {id:2,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../images/onboarding/phone.png')},
    {id:3,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../images/onboarding/phone.png')},
    {id:4,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../images/onboarding/phone.png')},
    {id:5,title: 'Lorem ipsum dolor sit amet, ', body:'(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices varius Mauris ultrices varius.....', picture:require('../images/onboarding/phone.png')},
  ]
  return (
    <View style={tw`mx-3`}>
      <StatusBar backgroundColor={'purple'} showHideTransition='slide'/>
      {/* <Text>home</Text> */}
      <TobBar
        body={
          <View style={tw`flex-row justify-between pt-4`}>
            <Ionicon  name='menu' size={34}/>
            <Text  style={tw`my-auto px-4`}>Welcome Rasheed</Text>
            <Ionicon name='notifications' size={28} color='purple'/>
          </View>
        }
      />
      <ScrollView>
      <View style={tw`flex-row bg-purple-100 my-3 rounded-lg py-2  px-2`}> 
        <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
        <TextInput
          placeholder='Search'
          style={tw`w-9/12`}
        />
      </View>

      <View>
        <Text style={tw`text-base font-bold mb-2`}> Latest Update </Text>
        <View>
          <Image style={tw`h-32 w-full rounded-lg`} source={require('../images/onboarding/network.png')}/>
        </View>

        <Text style={tw`text-base font-bold my-2`}> Feeds </Text>
        <View style={tw`flex-row justify-between px-5`}>
          <Pressable onPress={()=>navigation.navigate('events')}>
            <MaterialIcon name='event-available' style={tw`text-center pb-2`} color='#C4C4C4' size={35}/>
            <Text style={tw`text-xs`}>Events</Text>
          </Pressable>
          <Pressable onPress={()=>navigation.navigate('gallery')}>
            <FontAwesome name='photo' style={tw`text-center pb-2`} color='#C4C4C4' size={30} />
            <Text style={tw`text-xs`}>Gallery</Text>
          </Pressable>

          <Pressable onPress={()=>navigation.navigate('news')}>
            <Ionicon name='book' style={tw`text-center pb-2`} color='#C4C4C4' size={30}/>
            <Text style={tw`text-xs`}>Publications</Text>
          </Pressable>
        </View>

        <View style={tw`flex-row my-3 bg-purple-800 justify-between p-2 rounded-lg`}>
          <Text style={tw`font-bold text-white`}>News</Text>
          <Text style={tw`text-xs text-white`}>See All (500)</Text>
        </View>
        <View style={tw` flex-row mt-0 `}>
        <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            // contentContainerStyle={styles.container}
            numColumns={2}
            // scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            // contentOffset={1}
            renderItem={
                ({item}) => (
                  
                  <NewsCard 
                        image={item.picture}
                        head={item.title}
                        body={item.body}
                        navigation = {navigation}
                        to='viewNews'
                  />
                  )}/>
        </View>
      </View>
      
      </ScrollView>
    </View>
  )
}

export default Home