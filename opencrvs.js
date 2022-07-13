 import express from "express";
 
export default app => {
    
    app.all('/getsa', (_req, res) => {
        res.send('Hello Worldasdasdasd')
      })
      
}