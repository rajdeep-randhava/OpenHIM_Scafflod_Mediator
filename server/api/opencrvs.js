
import axios from 'axios'  

export const getdata = () => {


    let return_value=[];
     let url = process.env.OPENCRVS_GRAPHQL+"/graphql"
    
    let data = {"operationName":"searchEvents","variables":{"locationIds":["c9c4d6e9-981c-4646-98fe-4014fddebd5e"],"sort":"DESC","trackingId":"","registrationNumber":"","contactNumber":"","name":"Ing"},"query":"query searchEvents($sort: String, $trackingId: String, $contactNumber: String, $registrationNumber: String, $name: String, $locationIds: [String!]) {\n  searchEvents(\n    sort: $sort\n    trackingId: $trackingId\n    registrationNumber: $registrationNumber\n    name: $name\n    contactNumber: $contactNumber\n    locationIds: $locationIds\n  ) {\n    totalItems\n    results {\n      id\n      type\n      registration {\n        status\n        contactNumber\n        trackingId\n        registrationNumber\n        registeredLocationId\n        duplicates\n        assignment {\n          userId\n          firstName\n          lastName\n          officeName\n          __typename\n        }\n        createdAt\n        modifiedAt\n        __typename\n      }\n      ... on BirthEventSearchSet {\n        dateOfBirth\n        childName {\n          firstNames\n          familyName\n          use\n          __typename\n        }\n        __typename\n      }\n      ... on DeathEventSearchSet {\n        dateOfDeath\n        deceasedName {\n          firstNames\n          familyName\n          use\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"}
   
     let config_url = {
      method: 'post',
      url: url,
      data : data,
      headers: {    
        Accept : "*/*" ,
        authorization: process.env.OPENCRVS_TOKEN       
      }, 
    }
      
    return new Promise((resolve, reject) => {     
        axios(url,config_url,data).then((response) =>  { 
        resolve(response.data);
      }) 
    }).then(function(res){ 
      return res;
    }); 
  }