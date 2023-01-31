import { signupdata } from '../controler/usercontroler.js';
import  express  from 'express';

const router=express.Router();

router.post("/signup",signupdata)

export default router;