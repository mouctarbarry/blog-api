import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

describe('MongoDB Connexion', ()=>{
    it('should connect successfully to the database', async () => {
        const uri = process.env.MONGODB_URI || '';
        await expect(mongoose.connect(uri)).resolves.toBeDefined();
        await mongoose.disconnect();
    });
});


