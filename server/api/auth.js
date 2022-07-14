
import axios from 'axios' 
import config from '../config/index';

export const getToken = () => {
    let return_value=[];
     let url =  config().OPENCRVS_AUTH_URL+"/authenticateSystemClient"
    
    let data = {
        "client_id": config().OPENCRVS_CLIENT_ID ,
           "client_secret":config(). OPENCRVS_CLIENT_SECRET 
       }
     let config_url = {
      method: 'post',
      url: url,
      data : data 
     
    }
      
    return new Promise((resolve, reject) => {     
      axios(url,config_url,data).then((response) =>  { 
        config().OPENCRVS_TOKEN= response.data.token
        resolve(response.data);
      }) 
    }).then(function(res){ 
      return res;
    }); 
  }