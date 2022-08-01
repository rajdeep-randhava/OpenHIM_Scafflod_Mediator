
import axios from 'axios'  

export const getdata = (req) => {


    let return_value=[];
    const requestBody = req.body
    console.log("asd" + requestBody);

      var name = "", fathername = "",mothername= "",firstname="",lastname="";
      if(requestBody.first_name_value !=null && requestBody.first_name_value !=""){
        name  = requestBody.first_name_value  ;
        firstname = requestBody.first_name_value  ;
      }
      if(requestBody.last_name_value!=null && requestBody.last_name_value!=""){
        if(name){
         name = name  + " ";
        }
        name  = name + requestBody.last_name_value ;
        lastname =  requestBody.last_name_value;
      }
      if(requestBody.father_name_value !=null &&requestBody.father_name_value!=""){
        if(name){
         name = name  + " ";
        }
        name  = name +requestBody.father_name_value ;
        fathername = requestBody.father_name_value ;
      }
      if(requestBody.mother_name_value !=null && requestBody.mother_name_value !=""){
        if(name){
          name = name  + " ";
        }
        name  = name +requestBody.mother_name_value ;
        mothername= requestBody.mother_name_value ;
      }
      var brndrn = "";
      if(requestBody.brn_value){
        brndrn = requestBody.brn_value
      } 

      var contactNumber = "";
      if(requestBody.contactNumber){
        contactNumber = requestBody.contactNumber
      } 
        

    let url =  "http://172.16.18.160:7070/graphql"
   // let urltoken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWdpc3RlciIsInBlcmZvcm1hbmNlIiwiY2VydGlmeSIsImRlbW8iXSwiaWF0IjoxNjU5MzQ4NzM3LCJleHAiOjE2NTk5NTM1MzcsImF1ZCI6WyJvcGVuY3J2czphdXRoLXVzZXIiLCJvcGVuY3J2czp1c2VyLW1nbnQtdXNlciIsIm9wZW5jcnZzOmhlYXJ0aC11c2VyIiwib3BlbmNydnM6Z2F0ZXdheS11c2VyIiwib3BlbmNydnM6bm90aWZpY2F0aW9uLXVzZXIiLCJvcGVuY3J2czp3b3JrZmxvdy11c2VyIiwib3BlbmNydnM6c2VhcmNoLXVzZXIiLCJvcGVuY3J2czptZXRyaWNzLXVzZXIiLCJvcGVuY3J2czpjb3VudHJ5Y29uZmlnLXVzZXIiLCJvcGVuY3J2czp3ZWJob29rcy11c2VyIiwib3BlbmNydnM6Y29uZmlnLXVzZXIiXSwiaXNzIjoib3BlbmNydnM6YXV0aC1zZXJ2aWNlIiwic3ViIjoiNjJiOTljZDk4ZjExM2E3MDBjYzE5YTFhIn0.eHPrb0AllvU7gqyPqDYshQBuUZjVp1V6PFAgvuGyzjT1QMwPqlPRb0VRK2HejcvV_DngyGc4xW8Ta2gPnOk48G8HQB61_CO3TfbK7YYAzZ6Cg6osXMze9HYO8gfxOUCrHhCYDE1Xhqvb9wkuMBW0TtK9msnguBdf9A_r7ovqGu8FcHwzkAxpWabTqHtZ04ySvEkTOZi0Zeo-AN7woNCmpS-y65w82Z0lkv8HCzt3A0IADipbWpvFzbAkRVKkV_yEZWPehCFjAQEzYuMmVQV9a64fELO87-DbisRaNOYZ0sfCp-CssxUxHek6YkPd1M9BvBNuLlEsggo5jvsnq2KdJw"
    let urltoken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWdpc3RlciIsInBlcmZvcm1hbmNlIiwiY2VydGlmeSIsImRlbW8iXSwiaWF0IjoxNjU5MzU4NDQyLCJleHAiOjE2NTk5NjMyNDIsImF1ZCI6WyJvcGVuY3J2czphdXRoLXVzZXIiLCJvcGVuY3J2czp1c2VyLW1nbnQtdXNlciIsIm9wZW5jcnZzOmhlYXJ0aC11c2VyIiwib3BlbmNydnM6Z2F0ZXdheS11c2VyIiwib3BlbmNydnM6bm90aWZpY2F0aW9uLXVzZXIiLCJvcGVuY3J2czp3b3JrZmxvdy11c2VyIiwib3BlbmNydnM6c2VhcmNoLXVzZXIiLCJvcGVuY3J2czptZXRyaWNzLXVzZXIiLCJvcGVuY3J2czpjb3VudHJ5Y29uZmlnLXVzZXIiLCJvcGVuY3J2czp3ZWJob29rcy11c2VyIiwib3BlbmNydnM6Y29uZmlnLXVzZXIiXSwiaXNzIjoib3BlbmNydnM6YXV0aC1zZXJ2aWNlIiwic3ViIjoiNjJiOTljZDk4ZjExM2E3MDBjYzE5YTFhIn0.BpT4H5w15hEFuwbz51AiYVxDuiXYbme2YWqcrEXbLVeGO2zSNXrX1yzdqvmqBG2skckGs1FeyHIR5kdo19j_01xl04N6gtH9zhIzLlE-yysGc8vQQpO7howN-8tF80OnAJUPPxCRqhA05qxnzA8TRxiLlYSYhiD3W6V-30Ge3rvvkTIs1Jic3OfGyXhQQXs7tv_37PSR0RAjLSkM2JdWJfj9X1nMzsI9Bs9V20M0UHRQaIcnfD-9OpCbiIH8Ocli-cLYI8A3CsmObwdNic2VQOwNeVVf4btUPEVz7rAQZKrZ24M_G_37bH9kMuFoqCNXkMUzhtRHyBQk0KQGtGxvrA"
      
    let data = {"operationName":"searchEvents",
    "variables":{
    "locationIds":["c9c4d6e9-981c-4646-98fe-4014fddebd5e"],
    "sort":"DESC",
    "trackingId":"",
    "registrationNumber":brndrn,
    "contactNumber":contactNumber,
    "name":name
    },
    "query":"query searchEvents($sort: String, $trackingId: String, $contactNumber: String, $registrationNumber: String, $name: String, $locationIds: [String!]) {\n  searchEvents(\n    sort: $sort\n    trackingId: $trackingId\n    registrationNumber: $registrationNumber\n    name: $name\n    contactNumber: $contactNumber\n    locationIds: $locationIds\n  ) {\n    totalItems\n    results {\n      id\n      type\n      registration {\n        status\n        contactNumber\n        trackingId\n        registrationNumber\n        registeredLocationId\n        duplicates\n        assignment {\n          userId\n          firstName\n          lastName\n          officeName\n          __typename\n        }\n        createdAt\n        modifiedAt\n        __typename\n      }\n      ... on BirthEventSearchSet {\n        dateOfBirth\n        childName {\n          firstNames\n          familyName\n          use\n          __typename\n        }\n        __typename\n      }\n      ... on DeathEventSearchSet {\n        dateOfDeath\n        deceasedName {\n          firstNames\n          familyName\n          use\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"}
   
     let config_url = {
      method: 'post',
      url: url,
      data : data,
      headers: {    
        Accept : "*/*" ,
        authorization: urltoken  }, 
    }
      
    return new Promise((resolve, reject) => {  
      console.log("url " + url)   
       
        axios(config_url).then(async (response) =>  { 
 
        let dataResult = [];
        for (let index = 0; index < response.data.data.searchEvents.results.length; ++index) {
            
          response.data.data.searchEvents.results[index].detailData= await getDetailData(url,urltoken,response.data.data.searchEvents.results[index].id);
         
        }
          for (let index = 0; index < response.data.data.searchEvents.results.length; ++index) {
            
            //response.data.data.searchEvents.results[index].detaildata= await getDetailData(url,urltoken,response.data.data.searchEvents.results[index].id);
           
            const element = response.data.data.searchEvents.results[index];

            var fatherNameReturn = "", monthernameReturn = "";
            console.log("asd" +element.detailData)
            if(element.detailData!=null && element.detailData!= undefined && 
              element.detailData.father!=null && element.detailData.father!= undefined && 
              element.detailData.father.name[0]!=null && element.detailData.father.name[0]!= undefined   ){
                fatherNameReturn = element.detailData.father.name[0].firstNames;
            }

            if(element.detailData!=null && element.detailData!= undefined && 
              element.detailData.mother!=null && element.detailData.mother!= undefined && 
              element.detailData.mother.name[0]!=null && element.detailData.mother.name[0]!= undefined  ){
                monthernameReturn = element.detailData.mother.name[0].firstNames;
            }
 
            
            var thisRecordShouldCount = 0;
            if(fathername!=null && fathername !=""){
                if(fathername.toLowerCase()   != fatherNameReturn.toLowerCase()){
                    thisRecordShouldCount++;
                }
            }
            if(mothername!=null && mothername !=""){
                if(mothername.toLowerCase()  != monthernameReturn.toLowerCase()){
                    thisRecordShouldCount++;
                }
            }
            console.log(" element.type  "+ element.type );
           
            console.log(" fatherNameReturn  "+ fatherNameReturn );
            console.log(" monthernameReturn  "+ monthernameReturn );
            
            if(element.type == "Death"){

                

                if(firstname !=null && firstname!=""  ){ 
                    if(firstname.toLowerCase() != element.deceasedName[0].firstNames.toLowerCase()){
                        thisRecordShouldCount++;
                    } 
                }

                if(lastname !=null && lastname !=""){
                    if(lastname.toLowerCase()  != element.deceasedName[0].familyName.toLowerCase()){
                        thisRecordShouldCount++;
                    }
                }
                 
               if(thisRecordShouldCount==0){
                dataResult.push( response.data.data.searchEvents.results[index]); 
               }
              
            }else if(element.type =="Birth"){
 
                if(firstname !=null && firstname!=""  ){ 
                    if(firstname.toLowerCase() != element.childName[0].firstNames.toLowerCase()){
                        thisRecordShouldCount++;
                    } 
                }

                if(lastname !=null && lastname !=""){
                    if(lastname.toLowerCase()  != element.childName[0].familyName.toLowerCase()){
                        thisRecordShouldCount++;
                    }
                }
                 
                if(thisRecordShouldCount==0){
                  dataResult.push( response.data.data.searchEvents.results[index]); 
                  }
            }
        }
 
        resolve(dataResult);
      }) 
    }).then(function(res){ 
      return res;
    }); 
  }


function getDetailData(url,urltoken,IdForFeatch){
 
    let data = { 
      "operationName": "fetchDeathRegistrationForReview",
      "variables": {
        "id": IdForFeatch
      },
      "query": "query fetchDeathRegistrationForReview($id: ID!) {\n  fetchDeathRegistration(id: $id) {\n    _fhirIDMap\n    id\n    deceased {\n      id\n      name {\n        use\n        firstNames\n        familyName\n        __typename\n      }\n      birthDate\n      age\n      gender\n      maritalStatus\n      nationality\n      identifier {\n        id\n        type\n        otherType\n        __typename\n      }\n      gender\n      deceased {\n        deathDate\n        __typename\n      }\n      address {\n        type\n        line\n        district\n        state\n        city\n        postalCode\n        country\n        __typename\n      }\n      __typename\n    }\n    informant {\n      id\n      relationship\n      otherRelationship\n      individual {\n        id\n        identifier {\n          id\n          type\n          otherType\n          __typename\n        }\n        name {\n          use\n          firstNames\n          familyName\n          __typename\n        }\n        nationality\n        occupation\n        birthDate\n        telecom {\n          system\n          value\n          __typename\n        }\n        address {\n          type\n          line\n          district\n          state\n          city\n          postalCode\n          country\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    father {\n      id\n      name {\n        use\n        firstNames\n        familyName\n        __typename\n      }\n      __typename\n    }\n    mother {\n      id\n      name {\n        use\n        firstNames\n        familyName\n        __typename\n      }\n      __typename\n    }\n    spouse {\n      id\n      name {\n        use\n        firstNames\n        familyName\n        __typename\n      }\n      __typename\n    }\n    medicalPractitioner {\n      name\n      qualification\n      lastVisitDate\n      __typename\n    }\n       eventLocation {\n      id\n      type\n      address {\n        type\n        line\n        district\n        state\n        city\n        postalCode\n        country\n        __typename\n      }\n      __typename\n    }\n    questionnaire {\n      fieldId\n      value\n      __typename\n    }\n    mannerOfDeath\n    causeOfDeathEstablished\n    causeOfDeathMethod\n    causeOfDeath\n    deathDescription\n    maleDependentsOfDeceased\n    femaleDependentsOfDeceased\n      __typename\n  }\n}\n"
    }
     let config_url = {
      method: 'post',
      url: url,
      data : data,
      headers: {    
        Accept : "*/*" ,
        authorization: urltoken
         }, 
    }
      
    return new Promise((resolve, reject) => {  
     // console.log("url " + url)   
    //  console.log("config_url " + JSON.stringify( config_url) )  
        axios(config_url).then((response) =>  { 
        resolve(response.data.data.fetchDeathRegistration);
      }) 
    }).then(function(res){ 
      return res;
    }); 
  }


  export const getdatamediator = (req) => {

    var requestdata = req.body;

    let url =  "http://172.16.17.13:5001/scaffold"
   // let urltoken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWdpc3RlciIsInBlcmZvcm1hbmNlIiwiY2VydGlmeSIsImRlbW8iXSwiaWF0IjoxNjU5MzQ4NzM3LCJleHAiOjE2NTk5NTM1MzcsImF1ZCI6WyJvcGVuY3J2czphdXRoLXVzZXIiLCJvcGVuY3J2czp1c2VyLW1nbnQtdXNlciIsIm9wZW5jcnZzOmhlYXJ0aC11c2VyIiwib3BlbmNydnM6Z2F0ZXdheS11c2VyIiwib3BlbmNydnM6bm90aWZpY2F0aW9uLXVzZXIiLCJvcGVuY3J2czp3b3JrZmxvdy11c2VyIiwib3BlbmNydnM6c2VhcmNoLXVzZXIiLCJvcGVuY3J2czptZXRyaWNzLXVzZXIiLCJvcGVuY3J2czpjb3VudHJ5Y29uZmlnLXVzZXIiLCJvcGVuY3J2czp3ZWJob29rcy11c2VyIiwib3BlbmNydnM6Y29uZmlnLXVzZXIiXSwiaXNzIjoib3BlbmNydnM6YXV0aC1zZXJ2aWNlIiwic3ViIjoiNjJiOTljZDk4ZjExM2E3MDBjYzE5YTFhIn0.eHPrb0AllvU7gqyPqDYshQBuUZjVp1V6PFAgvuGyzjT1QMwPqlPRb0VRK2HejcvV_DngyGc4xW8Ta2gPnOk48G8HQB61_CO3TfbK7YYAzZ6Cg6osXMze9HYO8gfxOUCrHhCYDE1Xhqvb9wkuMBW0TtK9msnguBdf9A_r7ovqGu8FcHwzkAxpWabTqHtZ04ySvEkTOZi0Zeo-AN7woNCmpS-y65w82Z0lkv8HCzt3A0IADipbWpvFzbAkRVKkV_yEZWPehCFjAQEzYuMmVQV9a64fELO87-DbisRaNOYZ0sfCp-CssxUxHek6YkPd1M9BvBNuLlEsggo5jvsnq2KdJw"
    let urltoken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWdpc3RlciIsInBlcmZvcm1hbmNlIiwiY2VydGlmeSIsImRlbW8iXSwiaWF0IjoxNjU5MzU4NDQyLCJleHAiOjE2NTk5NjMyNDIsImF1ZCI6WyJvcGVuY3J2czphdXRoLXVzZXIiLCJvcGVuY3J2czp1c2VyLW1nbnQtdXNlciIsIm9wZW5jcnZzOmhlYXJ0aC11c2VyIiwib3BlbmNydnM6Z2F0ZXdheS11c2VyIiwib3BlbmNydnM6bm90aWZpY2F0aW9uLXVzZXIiLCJvcGVuY3J2czp3b3JrZmxvdy11c2VyIiwib3BlbmNydnM6c2VhcmNoLXVzZXIiLCJvcGVuY3J2czptZXRyaWNzLXVzZXIiLCJvcGVuY3J2czpjb3VudHJ5Y29uZmlnLXVzZXIiLCJvcGVuY3J2czp3ZWJob29rcy11c2VyIiwib3BlbmNydnM6Y29uZmlnLXVzZXIiXSwiaXNzIjoib3BlbmNydnM6YXV0aC1zZXJ2aWNlIiwic3ViIjoiNjJiOTljZDk4ZjExM2E3MDBjYzE5YTFhIn0.BpT4H5w15hEFuwbz51AiYVxDuiXYbme2YWqcrEXbLVeGO2zSNXrX1yzdqvmqBG2skckGs1FeyHIR5kdo19j_01xl04N6gtH9zhIzLlE-yysGc8vQQpO7howN-8tF80OnAJUPPxCRqhA05qxnzA8TRxiLlYSYhiD3W6V-30Ge3rvvkTIs1Jic3OfGyXhQQXs7tv_37PSR0RAjLSkM2JdWJfj9X1nMzsI9Bs9V20M0UHRQaIcnfD-9OpCbiIH8Ocli-cLYI8A3CsmObwdNic2VQOwNeVVf4btUPEVz7rAQZKrZ24M_G_37bH9kMuFoqCNXkMUzhtRHyBQk0KQGtGxvrA"
      console.log("requestdata " +requestdata)
    let data = {
      "first_name_value" : requestdata.first_name_value, 
      "last_name_value" :requestdata.last_name_value,
      "father_name_value" :requestdata.father_name_value,
      "mother_name_value" :requestdata.mother_name_value,
      "brn_value" :requestdata.brn_value,
      "contactNumber" :requestdata.contactNumber
  }
  console.log("asdasdasdsddd");
  console.log(data);
     let config_url = {
      method: 'post',
      url: url,
      data :  data ,
      headers: {    
        Accept : "*/*" ,
        authorization: urltoken 
       }, 
    }
      
    return new Promise((resolve, reject) => {  
      console.log("url " + url)    
        axios(config_url).then(async (response) =>  { 
          console.log("Asdasddsddd")
          console.log(JSON.parse(JSON.stringify(response.data)));
        resolve(JSON.parse(JSON.stringify( response.data)));
      }) 
    }).then(function(res){ 
      return res;
    }); 
  }