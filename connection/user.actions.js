import api from './api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginUser = async(data, org,callback, setLoading)=>{
    try {
        const response = await api.post(`tenant/${org}/tenant/auth/login/`,data);
       
        if (response.status ==200) {
            AsyncStorage.setItem('token',response.data.data.tokens.access)
            AsyncStorage.setItem('org_name',org)
            
            const user= await api.get(`client/${org}/employee/?user__email=${data.email}`)
            // const org= await api.get(`client/${org}/employee/?user__email=${data.email}`)
            if(user.status==200){
                const org= await api.get(`client/${AsyncStorage.getItem('org_name')}/organisation/current/`)
                if(org.status=200){
                    // console.log(org.data.company_logo)
                    AsyncStorage.setItem('company_logo',org.data.company_logo)

                }
                console.log(user.data.data)
                console.log(user.data.data.map(e=>e.corporate_level.uuid))

                if(user.data.data.map(e=>e.user.user_role)=='team_lead'){
                    AsyncStorage.setItem('team_uuid',user.data.data.map(e=>e.corporate_level.uuid))
                }else{AsyncStorage.setItem('team_uuid',null)}
                AsyncStorage.setItem('user_role',user.data.data.map(e=>e.user.user_role))
                AsyncStorage.setItem('user_id',user.data.data.map(e=>e.user.user_id))
                AsyncStorage.setItem('uuid',user.data.data.map(e=>e.uuid))
                AsyncStorage.setItem('first_name', user.data.data.map(e=>e.user.first_name))
                AsyncStorage.setItem('last_name', user.data.data.map(e=>e.user.last_name))
                AsyncStorage.setItem('last_name', user.data.data.map(e=>e.user.last_name))
                AsyncStorage.setItem('email', user.data.data.map(e=>e.user.email))
                AsyncStorage.setItem('password', data.password)


                callback(response)
                
            }
        
        } else {
          console.log(response.data)
          alert(response.message)
        //   callback(response.data)
        setLoading(false)
        }
    } catch (error) {
        console.error(error.message)
        // if(error.code)
        setLoading(false)
        if(error.message.includes('401')||error.message.includes('404')){
            alert('Invalid Login Details.')
        }else{
            // alert(error.response.data.errors[0].message)
        alert(error.message)
        // console.log(error.response.data.message)
        }
        // setLoading(false)reposn

    }
}

// tenant/{{shortName}}/tenant/news/getyournews/
//Gets News for a Member
export const GetNews = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${AsyncStorage.getItem('org_name')}/tenant/news/getyournews/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// Like News
export const LikeDisLikeNews = async(data,callback)=>{
    try {
        const response = await api.post(`tenant/${AsyncStorage.getItem('org_name')}/tenant/news/getyournews/`, data)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

//Get Publications
export const GetPublications = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${AsyncStorage.getItem('org_name')}/tenant/publication/getyourpublication/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// Like Publication
export const LikeDisLikePublication = async(data,callback)=>{
    try {
        const response = await api.post(`tenant/${AsyncStorage.getItem('org_name')}/tenant/publication/getyourpublication/`, data)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}


// Get Events
// /tenant/event/eventview/get_events/?is_chapter=true
export const GetEvents = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${AsyncStorage.getItem('org_name')}/tenant/event/eventview/get_events/?is_chapter=true`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}

// /tenant/dues/AdminManageDue/due_list_and_owning_members/
// Get My Dues

export const GetMyDues = async(status,callback)=>{
    try {
        const response = await api.get(`tenant/${AsyncStorage.getItem('org_name')}/tenant/dues/AdminManageDue/due_list_and_owning_members/`)
       
        if (response.status==200) {
            callback(response);
        } else {
          console.log(response.data.status)
          callback(response.data)
        }
    } catch (error) {
        console.error(error)
        // setLoading(false)

    }
}
