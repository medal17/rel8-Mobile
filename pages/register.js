import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../components/button/RoundedButton'
import { CreateUser, ValidationFields } from '../connection/user.actions'
import ModalTemplate from '../components/Modal'
import Loading from '../components/Modal/Loading'

const Register = ({navigation}) => {
  const [orgName, setOrgName] = useState(null)
  const [fields, setFields] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [validated, setValidated] = useState(false)
  const [fieldsData, setFieldsData] = useState([])
  const[ visible, setVisible] =useState(false)
  const[ success, setSuccess] =useState(false)

  const handleAddFieldData =(field,value)=>{
    console.log({[field] : value})
  }

  const handleValidation =()=>{
      if(orgName && !fields){
        console.log(orgName)
        ValidationFields(callback, orgName)
      } else if (orgName && fields && !validated){
        ValidationFields(ValidateCallback, orgName, fieldsData)

      }else if(orgName && fields && validated){
        setVisible(true)
        CreateUser(fieldsData,orgName,createCallback, setVisible)
      }
  }

  const ValidateCallback =(res)=>{
    console.log(res.data.data)
    setValidated(true)
    res.data.data.map(e=>
      setFieldsData(e.user)
      )
  }

  const createCallback =(res)=>{
    // console.log(res.data.data)
    setSuccess(true)
  }
  const callback=(res)=>{
    console.log(res.data.data)
    setFields(res.data.data)
    res.data.data.map(e=>
    setFieldsData({...fieldsData, [e]:null})
    )
  }
  console.log(fieldsData)

  return (
    <View style={tw`pt-4`}>
      <ModalTemplate visible={visible} body={<Loading setVisible={setVisible} isSuccess={success}/>}/>

      <Image style={tw`mx-auto my-8 h-16 w-16`} source={require('../images/Logo/rel88.png')}/>
      <View style={tw`mx-10`}>
         <Text style={tw`text-base font-bold`}>Register</Text>
          <Text>Input details to register</Text>
      </View>
       
        <View style={tw`mt-3 mx-7 py-4 bg-white shadow-sm rounded-3xl px-5`}>
          
          <View>
            
            {!validated && !fields &&
              <View style={tw`my-2 border-b`}>
                <Text style={tw`pb-2`}>Organization Name</Text>
                <TextInput
                placeholder='Organization Name'
                onChangeText={(text)=>setOrgName(text)}
                style={tw`pb-2`}
                />
            </View>}

           { !validated && fields &&
           fields.map(field=>
            <View key={field} style={tw`my-2 border-b`}>
                
                <Text style={tw`pb-2`}>{field}</Text>
                <TextInput
                style={tw`pb-2`}
                placeholder={field}
                onChangeText={(text)=>setFieldsData(  {...fieldsData, [field]:text})}
                />
                
            </View>)}
          { validated ?
            <View>
              <View style={tw`my-2 border-b`}>
                <Text style={tw`pb-2`}>Email Address</Text>
                <TextInput
                style={tw`pb-2`}
                placeholder='email Address'
                onChangeText={(text)=>setFieldsData(  {...fieldsData, 'rel8Email':text})}
                />
              </View>
              <View style={tw`my-3 border-b`}>
                <Text style={tw`pb-2`}>Password</Text>
                <TextInput
                style={tw`pb-2`}
                placeholder='Pasword'
                onChangeText={(text)=>setFieldsData(  {...fieldsData, 'password':text})}

                secureTextEntry={true}
                />
              </View>
          </View>:<></>}
          </View>


          <RoundedButton 
            text='Register'
            pressed={()=>handleValidation()}/>
          {/* <Text>Forgot Password?</Text> */}
          <View style={tw`flex-row mx-auto py-2`}>
              <Text>Already have an Account?</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                <Text style={tw`text-purple-800 font-bold`}> Login</Text>
              </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

export default Register