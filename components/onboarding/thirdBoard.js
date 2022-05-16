import { View, Text } from 'react-native'
import Onboarding from '.'
import tw from 'tailwind-react-native-classnames'
import FontAwsome from 'react-native-vector-icons/FontAwesome'


const ThirdBoard = ({navigation}) => {
  return (
    <View>
      <Onboarding
        image={require('../../images/onboarding/network.png')}
        title='Connect with all Members'
        bodyComponent={
          <View>
            <View style={tw`flex-row w-11/12 mb-1`}>
            <FontAwsome name='bullseye' style={tw`my-auto pr-3 text-purple-800`} size={20}/>
            <Text style={tw`text-black py-1`}>Seamlessly join virtual meetings via Rel&</Text>
          </View>

          <View style={tw`flex-row w-11/12 mb-1`}>
            <FontAwsome name='bullseye' style={tw`my-auto pr-3 text-purple-800`} size={20}/>
            <Text style={tw`text-black py-1`}>Chat with members on the general, state/chapter, exco, or committee</Text> 
          </View>

          <View style={tw`flex-row w-11/12 mb-1`}>
            <FontAwsome name='bullseye' style={tw`my-auto pr-3 text-purple-800`} size={20}/>
            <Text style={tw`text-black py-1`}>Chat with members on individual basis</Text>
          </View>

          <View style={tw`flex-row w-11/12 mb-1`}>
            <FontAwsome name='bullseye' style={tw`my-auto pr-3 text-purple-800`} size={20}/>
            <Text style={tw`text-black py-1`}>Search and connect with old members easily</Text>
          </View>
        </View>}
        navigation= {navigation}
        next='login'
        // next={navigation.navigate('first')}
      />
    </View>
  )
}

export default ThirdBoard