import mongoose from 'mongoose';

const connection = {};

async function connect(){
    if(connection.isConnected) {
        return;
    }else{
        const db = await mongoose.connect(process.env.MONGODB_URI);
    }
}

export default connect;