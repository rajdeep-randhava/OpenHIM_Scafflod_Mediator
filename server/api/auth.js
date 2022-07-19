
import axios from 'axios'  

export const getToken = () => {
    let return_value=[];
     let url =  process.env.OPENCRVS_AUTH_URL+"/authenticateSystemClient"
    
    let data = {
        "client_id": process.env.OPENCRVS_CLIENT_ID ,
           "client_secret":process.env. OPENCRVS_CLIENT_SECRET 
       }
     let config_url = {
      method: 'post',
      url: url,
      data : data 
     
    }
      
    return new Promise((resolve, reject) => {     
      axios(url,config_url,data).then((response) =>  { 
        process.env.OPENCRVS_TOKEN= response.data.token
        console.log(response.data)
        resolve(response.data);
      }) 
    }).then(function(res){ 
      return res;
    }).catch(function(err){
      console.log("eerrroor " + errs)
    }); 
  }