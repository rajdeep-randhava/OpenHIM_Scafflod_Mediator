import express from "express"; 
import {getdata} from "./opencrvs"

export default app => {
    
   
app.get('/getData', async (_req, res) => {
  try {
    var getTocken =await getToken();
    var getDataRes = await getdata();
     
    console.log(`This is Response ${getDataRes}`);

    await res.json({data: getDataRes});
  } catch (err) { 
    res.status(404).send(`Sorry, cant find that ${err}`);
  }

})
      
}