import {graphqlHTTP} from "express-graphql"; 
import { GraphQLSchema,
GraphQLObjectType, 
GraphQLString,
GraphQLList,
GraphQLInt,
GraphQLNonNull
} from "graphql";


const birthRegistrations = [
	{  id: 1,firstName:"Raj",lastName:"Randhava",fatherName:"Baldev",dob:"1994-05-21",eventLocation: "Fajalland"  },
	{  id: 2,firstName:"Vicky",lastName:"Patel",fatherName:"Munna",dob:"1993-05-21",eventLocation: "Fajalland"  },
    {  id: 3,firstName:"Pranav",lastName:"Vichare",fatherName:"Dev",dob:"1992-05-21",eventLocation: "Fajalland"  },
    {  id: 4,firstName:"Parth",lastName:"Dandavate",fatherName:"Mathur",dob:"1994-05-21",eventLocation: "Fajalland"  },
    {  id: 5,firstName:"Mittu",lastName:"Thakkar",fatherName:"Karan",dob:"1994-05-21",eventLocation: "Fajalland"  },
    {  id: 6,firstName:"Jeet",lastName:"Patel",fatherName:"bhai",dob:"1994-05-21",eventLocation: "Fajalland"  },
    {  id: 7,firstName:"Akash",lastName:"Dafane",fatherName:"John",dob:"1994-05-21",eventLocation: "Fajalland"  }    
]

const registrationData = [
	{  id: 1,type:"Birth", dateOfBirth:"1994-05-21",eventLocation: "Fajalland"  },
	{  id: 2,type:"Birth", dateOfBirth:"1993-05-21",eventLocation: "Fajalland"  },
    {  id: 3,type:"Birth", dateOfBirth:"1992-05-21",eventLocation: "Fajalland"  },
    {  id: 4,type:"Birth", dateOfBirth:"1994-05-21",eventLocation: "Fajalland"  },
    {  id: 5,type:"Birth", dateOfBirth:"1994-05-21",eventLocation: "Fajalland"  },
    {  id: 6,type:"Birth", dateOfBirth:"1994-05-21",eventLocation: "Fajalland"  },
    {  id: 7,type:"Birth", dateOfBirth:"1994-05-21",eventLocation: "Fajalland"  }    
]

const registrations = [
	{ mainid:1, "status":"DECLARED", "contactNumber":"+260985475120",    "trackingId":"BXENJNJ1",    "registrationNumber":null, "duplicates":null,"assignment":null, "createdAt":"1657278734743", "modifiedAt":null, },
	{ mainid:2, "status":"DECLARED", "contactNumber":"+260985475120",    "trackingId":"BXENJNJ2",    "registrationNumber":null, "duplicates":null,"assignment":null, "createdAt":"1657278734743", "modifiedAt":null, },
    { mainid:3, "status":"DECLARED", "contactNumber":"+260985475120",    "trackingId":"BXENJNJ3",    "registrationNumber":null, "duplicates":null,"assignment":null, "createdAt":"1657278734743", "modifiedAt":null, },
    { mainid:4, "status":"DECLARED", "contactNumber":"+260985475120",    "trackingId":"BXENJNJ4",    "registrationNumber":null, "duplicates":null,"assignment":null, "createdAt":"1657278734743", "modifiedAt":null, },
    { mainid:5, "status":"DECLARED", "contactNumber":"+260985475120",    "trackingId":"BXENJNJ5",    "registrationNumber":null, "duplicates":null,"assignment":null, "createdAt":"1657278734743", "modifiedAt":null, },
    { mainid:6, "status":"DECLARED", "contactNumber":"+260985475120",    "trackingId":"BXENJNJ6",    "registrationNumber":null, "duplicates":null,"assignment":null, "createdAt":"1657278734743", "modifiedAt":null, },
    { mainid:7, "status":"DECLARED", "contactNumber":"+260985475120",    "trackingId":"BXENJNJ7",    "registrationNumber":null, "duplicates":null,"assignment":null, "createdAt":"1657278734743", "modifiedAt":null, }, 
]

const Childname = [ 
        {  id: 1,firstName:"Raj",lastName:"Randhava",fatherName:"Baldev"   },
        {  id: 2,firstName:"Vicky",lastName:"Patel",fatherName:"Munna"  },
        {  id: 3,firstName:"Pranav",lastName:"Vichare",fatherName:"Dev"   },
        {  id: 4,firstName:"Parth",lastName:"Dandavate",fatherName:"Mathur"  },
        {  id: 5,firstName:"Mittu",lastName:"Thakkar",fatherName:"Karan"   },
        {  id: 6,firstName:"Jeet",lastName:"Patel",fatherName:"bhai"  },
        {  id: 7,firstName:"Akash",lastName:"Dafane",fatherName:"John"  }
] 


const BirthType = new GraphQLObjectType({
    name:'Birth',
    description : 'This is represent a birth registration ',
    fields : () => ({
        id: {type :   GraphQLNonNull (GraphQLInt)},
        firstName: {type :   GraphQLNonNull (GraphQLString)},
        lastName: {type :   GraphQLNonNull (GraphQLString)},
        fatherName: {type :   GraphQLNonNull (GraphQLString)},
        dob: {type :   GraphQLNonNull (GraphQLString)},
        eventLocation: {type :   GraphQLNonNull (GraphQLString)}
    })
})
 
const registrationDataOType = new GraphQLObjectType({
    name:'registrationData',
    description : 'This is represent a registration Data ',
    fields : () => ({
        id: {type :   GraphQLNonNull (GraphQLInt)},
        id: {type :   GraphQLNonNull (GraphQLString)},
        dateOfBirth: {type :   GraphQLNonNull (GraphQLString)},
        eventLocation: {type :   GraphQLNonNull (GraphQLString)} 
    })
})

 
const RootQueryType = new GraphQLObjectType({
    name :"Query",
    description :"Root Query",
    fields : () => ({
        birthRegistrations  :{
            type : new GraphQLList(BirthType),
            description :'List of Birth Registration',
            resolve: ()=> birthRegistrations
        }
    })

})

const schema = new GraphQLSchema({ 
    query : RootQueryType  
})

export default app => {  
    app.use('/graphql', graphqlHTTP({
        schema : schema,
        graphiql :true
      }));     
}