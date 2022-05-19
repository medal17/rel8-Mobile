import React,  {useState} from 'react';
import { View, Text, TextInput, ActivityIndicator,Pressable } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import RoundedButton from '../button/RoundedButton';
import Ionicon from 'react-native-vector-icons/Ionicons'
import { GenerateTicket } from '../../connection/user.actions';

export default function SupportChat(props) {

    const [status, setStatus] = useState(null)
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)

const cancel=()=>{
    // navigation.goBack()
    props.setVisible(false)
}

const callback =()=>{
    setStatus('sent')
}
const send=()=>{
    // navigation.goBack()
    // navigation.navigate('login')
    if(title && body){
    GenerateTicket(false, callback,{'heading':title, 'body':body},props.setVisible)
    setStatus('loading');

}
    // setTimeout(()=>{
    //     setStatus('sent')
    // },3000);
    // props.setVisible(false)
}

const Loading =()=>{
    return(
        <View style={tw`my-auto my-12`}>
            <ActivityIndicator size={40} color='purple'/>
            <Text style={tw`mx-auto text-gray-500`}>Sending Message</Text>
        </View>
    )
}


const Sent = () =>{
    return(
        <View style={tw`my-auto mt-8 mb-6 px-10`}>
            <Ionicon style={tw` mx-auto text-purple-900`} name='md-checkmark-circle' size={50}/>
            <Text style={tw`mx-auto text-base text-gray-500 py-3`}>Message Sent</Text>
            <View style={tw`pt-6 w-5/12 mx-auto`}>
                <RoundedButton text='Ok' pressed={()=>props.setVisible('false')}/>
            </View>
        </View>
    )
}
  return (
    <View style={tw`h-full`}>
        {/* <ModalTemplate
            visible={visible}
            body={ */}
            <View style={tw`m-auto bg-white rounded-xl w-10/12`}>
                {status=='loading' ?
                <Loading/> :
                (status == 'sent' ?
                <Sent/> 
                :
                (status =='error' ? 
                <>
                
                </>:
                <>
                <View style={tw`border-b border-purple-300 my-3 mx-5`}>
                    <Text style={tw`font-bold text-lg text-center text-purple-500 py-2`}>Message Support</Text>
                </View>
                
                {/* <View style={tw`mb-1`}>
                    <Text style={tw`px-4 pt-3 pb-0.5 text-gray-700`}>Name</Text>
                    <TextInput
                        placeholder='Name'
                        style={tw`border-b border-gray-500 p-1 mx-4`}
                    />
                </View>

                <View style={tw`mb-1`}>
                    <Text style={tw`px-4 pt-3 pb-0.5 text-gray-700`}>Email Address</Text>
                    <TextInput
                        placeholder='Email Address'
                        style={tw`border-b border-gray-500 p-1 mx-4`}
                    />
                </View> */}

                <View style={tw`mb-1`}>
                    <Text style={tw`px-4 pt-3 pb-0.5 text-gray-700`}>Title</Text>
                    <TextInput
                        placeholder='Title'
                        style={tw`border-b border-gray-500 p-1 mx-4`}
                        onChangeText={(text)=>setTitle(text)}
                    />
                </View>

                <View style={tw`mb-1`}>
                    <Text style={tw`px-4 pt-3 pb-0.5 text-gray-700`}>Message</Text>
                    <TextInput
                        placeholder='Message'
                        numberOfLines={3}
                        multiline={true}
                        onChangeText={(text)=>setBody(text)}
                        style={tw`border rounded-md h-16 border-gray-400 p-1 mx-4`}
                    />
                </View>

                <View style={tw`px-5 flex-row mb-4 justify-around `}>
                    <View style={tw`w-5/12`}>
                        <RoundedButton text='Send' pressed={()=>send()}/>
                    </View>
                    <Pressable onPress={()=>cancel()}>
                        <Text style={tw`my-auto`}>Cancel</Text>
                    </Pressable>
                </View>
                </>))}
            </View>
            {/* }
        /> */}
    </View>
  );
}
