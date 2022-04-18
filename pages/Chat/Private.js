import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ChatsCard from '../../components/chat/ChatsCard'
import ChatList from '../../components/chat/ChatList'

const Private = () => {
    const data =[
        {id:1,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:2,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:3,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:4,name: 'Ayinde Micheal ', time:'07:00', message:'Lorem ipsum dolor sit amet, dolor sit amet,,', picture:require('../../images/onboarding/phone.png')},
        {id:5,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
        {id:6,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
        {id:7,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
        {id:8,name: 'Ayinde Micheal ', isme:true, time:'07:00', message:'Ok , Thanks', picture:require('../../images/onboarding/phone.png')},
        
      ]
  return (
    <View>
        <View style={tw`flex-row justify-between pt-4`}>
            <Ionicon  name='menu' size={34}/>
            <Text  style={tw`my-auto px-4`}>Welcome Rasheed</Text>
            <Ionicon name='notifications' size={28} color='purple'/>
          </View>
      <FlatList
            data={data}
            keyExtractor={ (item, index) => item.id }
            
            showsVerticalScrollIndicator={false}
            renderItem={
                ({item}) => (
            <ChatList 
                    name={item.name}
                    image={item.picture}
                    message={item.message}
                    time={item.time}
            />   
                )}
        />
    </View>
  )
}

export default Private