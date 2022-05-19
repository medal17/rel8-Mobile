import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../components/button/RoundedButton'
import { CreateUser, ValidationFields } from '../connection/user.actions'

const Register = ({navigation}) => {
  const [orgName, setOrgName] = useState(null)
  const [fields, setFields] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [validated, setValidated] = useState(false)
  const [fieldsData, setFieldsData] = useState([])

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
        CreateUser(fieldsData,orgName,createCallback)
      }
  }

  const ValidateCallback =(res)=>{
    // console.log(res)
    setValidated(true)
  }

  const createCallback =(res)=>{
    console.log(res)
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
      <Image style={tw`mx-auto my-8 h-16 w-16`} source={require('../images/Logo/rel88.png')}/>
      <View style={tw`mx-10`}>
         <Text style={tw`text-base font-bold`}>Register</Text>
          <Text>Input details to register</Text>
      </View>
       
        <View style={tw`mt-3 mx-7 py-4 bg-white shadow-sm rounded-3xl px-5`}>
          
          <View>
            {/* <View style={tw`flex-row justify-between`}>
              <View style={tw`my-1 w-5/12 border-b`}>
                <Text>First Name</Text>
                <TextInput
                placeholder='First Name'
                />
              </View>
              <View style={tw`my-1 w-5/12 border-b`}>
                <Text>Last Name</Text>
                <TextInput
                placeholder='Last Name'
                />
              </View>
            </View> */}
            {!validated && !fields &&
              <View style={tw`my-2 border-b`}>
                <Text>Organization Name</Text>
                <TextInput
                placeholder='Organization Name'
                onChangeText={(text)=>setOrgName(text)}
                />
            </View>}

           { !validated && fields &&
           fields.map(field=>
            <View style={tw`my-2 border-b`}>
                <Text>{field}</Text>
                <TextInput
                
                placeholder={field}
                onChangeText={(text)=>setFieldsData(  {...fieldsData, [field]:text})}
                />
                
            </View>)}
          { validated ?
            <View>
              <View style={tw`my-2 border-b`}>
                <Text>Email Address</Text>
                <TextInput
                placeholder='email Address'
                onChangeText={(text)=>setFieldsData(  {...fieldsData, 'rel8Email':text})}
                />
              </View>
              <View style={tw`my-3 border-b`}>
                <Text>Password</Text>
                <TextInput
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