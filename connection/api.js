import { NavigationAction } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const URL = 'https://rel8backend.herokuapp.com/'
// const navigation = useNavigation()

const instance = axios.create({
  baseURL: URL,
});

instance.interceptors.request.use((config) => {

  const token = AsyncStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : null;
  
  return config;
});

export default instance;