import {birthRegistrations,registrations,registrationData,Childname} from '../data/fakedata'


const resolvers = {

    Query:{
        getAllBirthRegistrations(){
            return birthRegistrations
        }
    },


}

module.exports = {resolvers}