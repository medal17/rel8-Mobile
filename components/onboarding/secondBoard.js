import { View, Text } from 'react-native'
import Onboarding from '.'
import tw from 'tailwind-react-native-classnames'
import FontAwsome from 'react-native-vector-icons/FontAwesome'


const Secondoard = ({navigation}) => {
  return (
    <View>
      <Onboarding
        image={require('../../images/onboarding/phone.png')}
        title='Get Important Updates'
        bodyComponent={
          <View>
          <View style={tw`flex-row w-11/12 mb-1`}>
            <FontAwsome name='bullseye' style={tw`my-auto pr-3 text-purple-800`} size={20}/>
            <Text style={tw`text-black `}> Get updates ranging from news be it from the national/global, state/chapter and members based</Text>
          </View>
          <View style={tw`flex-row w-11/12 mb-1`}>
            <FontAwsome name='bullseye' style={tw`my-auto pr-3 text-purple-800`} size={20}/>
            <Text style={tw`text-black pt-0.5`}>Get notified about events and register to participate as well as make payment on your mobile if it is a paid events</Text>
          </View>
          <View style={tw`flex-row w-11/12 mb-1`}>
            <FontAwsome name='bullseye' style={tw`my-auto pr-3 text-purple-800`} size={20}/>
            <Text style={tw`text-black pt-0.5`}>Pay your membership dues and other donations or levies</Text>
          </View>
          <View style={tw`flex-row w-11/12 mb-1`}>
            <FontAwsome name='bullseye' style={tw`my-auto pr-3 text-purple-800`} size={20}/>
            <Text style={tw`text-black pt-0.5`}>View your account summary as a member</Text>
          </View>

          <View style={tw`flex-row w-11/12 mb-1`}>
            <FontAwsome name='bullseye' style={tw`my-auto pr-3 text-purple-800`} size={20}/>
            <Text  style={tw`text-black pt-0.5`}>Easy access to publications, research findings and speeches originating from with the association or organization.</Text>
          </View>
        </View >
        }
        navigation= {navigation}
        next='third'
        // next={navigation.navigate('first')}
      />
    </View>
  )
}

export default Secondoard