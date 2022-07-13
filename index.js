'use strict'

import express from 'express';
import axios from 'axios' 
import api from "./opencrvs"
import cors from "cors"

// The OpenHIM Mediator Utils is an essential package for quick mediator setup.
// It handles the OpenHIM authentication, mediator registration, and mediator heartbeat.
import {
  registerMediator,
  activateHeartbeat,
  fetchConfig
} from 'openhim-mediator-utils'

// The mediatorConfig file contains some basic configuration settings about the mediator
// as well as details about the default channel setup.
import mediatorConfig, { urn } from './mediatorConfig.json'

// The config details here are used to authenticate and register the mediator with the OpenHIM instance
const openhimConfig = {
  username: 'root@openhim.org',
  password: 'wXV8xSW2Ju5X3EPn',
  apiURL: 'https://openhim-core:8080',
  trustSelfSigned: true,
  urn
}

const app = express();

function getdata(){
  let return_value=[];
   let url = "http://172.16.17.13:7070/graphql"
  
  let data = {"operationName":"searchEvents","variables":{"locationIds":["c9c4d6e9-981c-4646-98fe-4014fddebd5e"],"sort":"DESC","trackingId":"","registrationNumber":"","contactNumber":"","name":"Ing"},"query":"query searchEvents($sort: String, $trackingId: String, $contactNumber: String, $registrationNumber: String, $name: String, $locationIds: [String!]) {\n  searchEvents(\n    sort: $sort\n    trackingId: $trackingId\n    registrationNumber: $registrationNumber\n    name: $name\n    contactNumber: $contactNumber\n    locationIds: $locationIds\n  ) {\n    totalItems\n    results {\n      id\n      type\n      registration {\n        status\n        contactNumber\n        trackingId\n        registrationNumber\n        registeredLocationId\n        duplicates\n        assignment {\n          userId\n          firstName\n          lastName\n          officeName\n          __typename\n        }\n        createdAt\n        modifiedAt\n        __typename\n      }\n      ... on BirthEventSearchSet {\n        dateOfBirth\n        childName {\n          firstNames\n          familyName\n          use\n          __typename\n        }\n        __typename\n      }\n      ... on DeathEventSearchSet {\n        dateOfDeath\n        deceasedName {\n          firstNames\n          familyName\n          use\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"}
 
   let config = {
    method: 'post',
    url: url,
    data : data,
    headers: {    
      Accept : "*/*" ,
      authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJkZWNsYXJlIiwiZGVtbyJdLCJpYXQiOjE2NTc2MjEwNzIsImV4cCI6MTY1ODIyNTg3MiwiYXVkIjpbIm9wZW5jcnZzOmF1dGgtdXNlciIsIm9wZW5jcnZzOnVzZXItbWdudC11c2VyIiwib3BlbmNydnM6aGVhcnRoLXVzZXIiLCJvcGVuY3J2czpnYXRld2F5LXVzZXIiLCJvcGVuY3J2czpub3RpZmljYXRpb24tdXNlciIsIm9wZW5jcnZzOndvcmtmbG93LXVzZXIiLCJvcGVuY3J2czpzZWFyY2gtdXNlciIsIm9wZW5jcnZzOm1ldHJpY3MtdXNlciIsIm9wZW5jcnZzOmNvdW50cnljb25maWctdXNlciIsIm9wZW5jcnZzOndlYmhvb2tzLXVzZXIiLCJvcGVuY3J2czpjb25maWctdXNlciJdLCJpc3MiOiJvcGVuY3J2czphdXRoLXNlcnZpY2UiLCJzdWIiOiI2MmI5OWNkODhmMTEzYTcwMGNjMTlhMTgifQ.X4B8S6J992V3I_gmxEW3KEl3LRlZXmTcSkqYiAmFhy9jJRni14tCWYH71BONlYdnySJSrZnmc6VHmlG3uEcu0Ue7lwxZO9Dxnr9UY8cx6H6TQqLZHpEaQ8_sBzBz4HZQ1rabbJcdFPlahaJFoA-RCx-ng-UEJEFKvGXmtXbaA7BXMmvIgB-A-1tnMpH84shJm0tEtAz9etrpKjnmRwEzVAbVGxGpg20GkJk_n_BWwTGJ8lTsvXCikz40e7QLWIVMsTfVohpltUpEEgJwJXCfinvJkyZf5nHHrTmlZoJ87b5NRFhWoZBbxBaZ4GeixU7gq9Pnw8jXPudrObB10X64uw"       
    },
   

  }
   

  return new Promise((resolve, reject) => {     
    axios(url,config,data).then((response) =>  { 
      resolve(response.data);
    }) 
  }).then(function(res){
    //console.log("res" ,res)
    return res;
  }); 
}

//api(app);
  
app.use(cors())

app.get('/getData', async (_req, res) => {
  try {
    var getDataRes = await getdata();
    //var getDataJson = JSON.parse(getDataRes);

    console.log(`This is Response ${getDataRes}`);

    await res.json({data: getDataRes});
  } catch (err) { 
    res.status(404).send(`Sorry, cant find that ${err}`);
  }

})

// Any request regardless of request type or url path to the mediator port will be caught here
// and trigger the Hello World response.
app.all('/', (_req, res) => {
  res.send('Hello World')
})


app.listen(3001, () => {
  console.log('Server listening on port 3000...')

  mediatorSetup()
})

const mediatorSetup = () => {
  // The purpose of registering the mediator is to allow easy communication between the mediator and the OpenHIM.
  // The details received by the OpenHIM will allow quick channel setup which will allow tracking of requests from
  // the client through any number of mediators involved and all the responses along the way(if the mediators are
  // properly configured). Moreover, if the request fails for any reason all the details are recorded and it can
  // be replayed at a later date to prevent data loss.
  registerMediator(openhimConfig, mediatorConfig, err => {
    if (err) {
      throw new Error(`Failed to register mediator. Check your Config. ${err}`)
    }

    console.log('Successfully registered mediator!')

    fetchConfig(openhimConfig, (err, initialConfig) => {
      if (err) {
        throw new Error(`Failed to fetch initial config. ${err}`)
      }
      console.log('Initial Config: ', JSON.stringify(initialConfig))

      // The activateHeartbeat method returns an Event Emitter which allows the mediator to attach listeners waiting
      // for specific events triggered by OpenHIM responses to the mediator posting its heartbeat.
      const emitter = activateHeartbeat(openhimConfig)

      emitter.on('error', err => {
        console.error(`Heartbeat failed: ${err}`)
      })

      // The config events is emitted when the heartbeat request posted by the mediator returns data from the OpenHIM.
      emitter.on('config', newConfig => {
        console.log('Received updated config:', JSON.stringify(newConfig))
      })
    })
  })
}
