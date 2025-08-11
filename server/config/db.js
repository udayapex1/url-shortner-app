import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}`)
        console.log(`Connected to DB :${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}


export default connectDB;