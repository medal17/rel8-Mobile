import { View, Text, TextInput, Image } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicon from 'react-native-vector-icons/Ionicons'
import * as DocumentPicker from 'expo-document-picker';



const MessageField = () => {
  const [image, setImage] =useState(null);
  const [document, setDocument] = useState(null)
  const [doctype, setDoctype] =useState(null);

  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      mediaTypes:DocumentPicker.All,
      allowsEditing:true
    });
      if(!result.cancelled){
          setDocument(result.uri)
          setDoctype(result.mimeType)
      }
}

  return (
    <View style={tw` mx-1 -my-1 py-3 `}>

{
        document ?
        (  doctype == 'image/jpeg' || doctype =='image/png' ?
        <View style={tw`pb-2`}>
          <Image source={{uri:document}} style={{ width: '87%', height: 100 }}/>
          <Ionicon onPress={()=>setDocument(null)} name='close-circle' style={tw`absolute shadow-xl text-red-400 top-0 right-0 px-2`} size={24} />
        </View>:
        <View style={tw`pb-2`}>
        {/* <Image source={{uri:image}} style={{ width: '87%', height: 100 }}/> */}
        {/* its fil */}
        <Ionicon name='folder' size={50} style={tw`mx-auto`} color='purple' />
        <Ionicon onPress={()=>setDocument(null)} name='close-circle' style={tw`absolute shadow-xl text-red-400 top-0 right-0 px-2`} size={24} />
        <Text style={[tw`mx-auto font-bold text-pink-400`, {color:'purple'}]}>{document.substr(document.lastIndexOf(".") + 1).toUpperCase()}</Text>
      </View>
        )
        :<></>  
      }
        <View style={tw`bg-gray-100 flex-row rounded-xl my-auto w-11/12 mx-2 p-3`}>
        {/* <Text>WriteCommentCard</Text> */}
        <Ionicon name='attach' size={25} onPress={()=>_pickDocument()}/>
        <TextInput placeholder='Write Message' multiline style={tw`w-10/12`}/>
        <Ionicon name='md-send' size={25} style={tw`text-purple-700`}/>
    </View>
</View>
  )
}

export default MessageField