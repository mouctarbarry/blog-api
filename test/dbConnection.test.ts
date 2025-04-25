import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {loadEnvConfig} from "../src/utils/env-utils";

loadEnvConfig();

describe('MongoDB Connexion', ()=>{
    it('should connect successfully to the database', async () => {
        const uri = process.env.MONGODB_URI || '';
        await expect(mongoose.connect(uri)).resolves.toBeDefined();
        await mongoose.disconnect();
    });
});


