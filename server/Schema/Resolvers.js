import {birthRegistrationsList,registrationsList,registrationDataList,ChildnameList} from '../data/fakedata'
import _ from "lodash"

const resolvers = {

    Query:{
        getAllBirthRegistrations(){
            return birthRegistrationsList
        },
        EventSearchResultSet: (parent,args) =>{
            const id = args.id;
            const name = args.name;
            console.log("id" + id) 
            console.log("name" + name) 
            let userlist = null
            if(id!=undefined && id!="" && id!=0){
                userlist= _.filter(birthRegistrationsList,(birth) =>  birth.id == id  );
            }else{
                userlist = _.filter(birthRegistrationsList,(birth) =>  
                birth.firstName.includes(name) || 
                birth.lastName.includes(name) || 
                birth.fatherName.includes(name)    );
            }
           
            return userlist
        },
        // registrationData :{
        //     registration: ()=>{

        //     }
        // }
    },


}

module.exports = {resolvers}