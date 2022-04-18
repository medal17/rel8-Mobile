import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames'
import CommentCard from '../../components/News/CommentCard'
import WriteCommentCard from '../../components/News/WriteCommentCard'

const ViewNews = () => {
  return (
    <ScrollView style={tw`h-full`}>
        <View style={tw`h-60 p-3`}>
            <Image  
            resizeMode='cover'
            style={tw`h-full w-full rounded-lg`}
            source={require('../../images/onboarding/phone.png')}/>
        </View>
        <View style={tw`px-4 py-2`}>
            <Text style={tw`text-base font-bold text-purple-800 py-1`}>24th Annual Anniversary Celebration</Text>
            <Text style={tw`text-justify text-gray-800 py-1`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Et lacus lacus, proin proin egestas. Augue 
            scelerisque pellentesque nullam montes, pretium. 
            Nisl, in netus Et lacus lacus, proin proin egestas. 
            Augue scelerisque pellentesque nullam montes,
             pretium. Nisl, in netus 
            </Text>
            <Text style={tw`text-justify text-gray-400 py-1`}>5 Likes</Text>

        <View style={tw`border-t border-b flex-row justify-around border-gray-500 py-2`}>
          <View style={tw`flex-row pl-5`}>
            <MaterialIcon name='thumb-up-off-alt' color='purple' size={23}/>
            <Text style={tw`my-auto px-2`}>Like</Text>
          </View>

          <View style={tw`flex-row px-5`}>
            <FontAwesome name='commenting-o' color='purple' size={23}/>
            <Text style={tw`my-auto px-2`}>Like</Text>
          </View>

          
        </View>
        <View>
          <CommentCard/>
          <CommentCard/>
          <CommentCard/>
        </View>

        {/* //View More */}
        <Text style={tw`text-purple-800 font-bold`}>View 3 More Comments</Text>
        </View>  
        <View>
          <WriteCommentCard/>
        </View>
        
      
    </ScrollView>
  )
}

export default ViewNews