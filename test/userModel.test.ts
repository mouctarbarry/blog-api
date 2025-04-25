import mongoose from "mongoose";
import { User } from "../src/models/Users";
import {loadEnvConfig} from "../src/utils/env-utils";

loadEnvConfig();

beforeAll(async ()=>{
    await mongoose.connect(process.env.MONGODB_URI || '');
});

afterAll(async ()=>{
    await mongoose.connection.dropDatabase()
    await mongoose.disconnect();
});

describe('User Model Test', ()=>{
    it('should create & save a user successfully', async () => {
        const user = new User({
            name: 'Mouctar',
            email: 'mouctar@caramail.fr',
            password: "secured-password-1020"
        })

        const savedUser = await user.save();

        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toBe("Mouctar");
        expect(savedUser.email).toBe("mouctar@caramail.fr");
        expect(savedUser.password).toBe("secured-password-1020");
    });
})


