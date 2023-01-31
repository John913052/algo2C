import mongoose from "mongoose";
const url='mongodb+srv://sandy:sandy@hiconsolar1.0a0d9nn.mongodb.net/HICOUNSELOR?retryWrites=true&w=majority'
// const url='mongodb+srv://sandy:sandeep@cluster0.u18zwei.mongodb.net/DataBase3?retryWrites=true&w=majority';
// const url='mongodb+srv://sandy:sandeep@cluster0.u18zwei.mongodb.net/DataBase3?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
const connectDB =async()=>{
    try {
        await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("coonection DB successfully")
    } catch (error) {
        console.log(error)
    }

}
export default connectDB