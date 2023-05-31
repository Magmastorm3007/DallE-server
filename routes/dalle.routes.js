import express from 'express'
import * as dotenv from 'dotenv'
import { Configuration,OpenAIApi } from 'openai'
dotenv.config()
const router=express.Router();
const config=new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
})
const openai=new OpenAIApi(config);

router.route('/').get((req,res)=>{
    res.status(200).json({message:"world"})
})

router.route('/').post(async(req,res)=>{
    console.log('reached')
   try{
    const {prompt}=req.body;
    const response=await openai.createImage({
        prompt:prompt,
        n:1,
        size:'1024*1024',
        response_format:'b64_json'
    })
    const image=response.data.data[0].b64_json;

   }
   catch(error){

   }
})

export default router
