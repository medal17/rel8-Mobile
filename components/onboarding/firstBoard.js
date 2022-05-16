import { View, Text } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'
import Onboarding from '.'


const FirstBoard = ({navigation}) => {
  return (
    <View>
      <Onboarding
        image={require('../../images/onboarding/guy.png')}
        title='Welcome to REL8'
        body='Rel8 is a community-based interaction and collaboration app, designed to keep the operations, interactions and collaborative activities of people of common interests in sync remotely within closed defined virtual communities.'
        navigation= {navigation}
        next={'second'}
      />
      {/* <View style={tw` absolute bottom-0 px-3 w-full`}>
                <View style={tw`flex-row  justify-between py-2`}>
                    <View style={tw`my-auto`}>
                        <Text>Skip</Text>
                    </View>
                    <View style={tw`my-auto`}>
                        <Ionicon onPress={()=>navigation.navigate('second')} name='ios-arrow-forward-circle' size={38} color='#7F02A2' />
                    </View>
                </View>
            </View> */}
    </View>
  )
}

export default FirstBoard