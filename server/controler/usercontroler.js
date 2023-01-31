// import SignupDbc from "./databaseConnection/connectiondb.js"
// import SignupDbc from '../../databaseConnection/connectiondb.js';
import SignupDbc from "../modelSchema/signup.js";
const signupdata=async(req,res)=>{
   try {
      const exit= await SignupDbc.findOne({UserName:req.body.UserName})
      if(exit){
        return  res.status(500).json({message:'user already exit'})
      }
      const data=req.body;
      const NewData=new SignupDbc(data)
      await NewData.save()
      console.log(data)
      res.status(200).json({message:"user Created Successfully"})

   } catch (error) {
      res.status(2500).json({message:error.message})
   }
}
export {signupdata}