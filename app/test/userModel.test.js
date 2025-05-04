"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = require("../src/models/User");
const env_utils_1 = require("../src/utils/env-utils");
(0, env_utils_1.loadEnvConfig)();
beforeAll(async () => {
    await mongoose_1.default.connect(process.env.MONGODB_URI || '');
});
afterAll(async () => {
    await mongoose_1.default.connection.dropDatabase();
    await mongoose_1.default.disconnect();
});
describe('User Model Test', () => {
    it('should create & save a user successfully', async () => {
        const user = new User_1.User({
            name: 'Mouctar',
            email: 'mouctar@caramail.fr',
            password: "secured-password-1020"
        });
        const savedUser = await user.save();
        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toBe("Mouctar");
        expect(savedUser.email).toBe("mouctar@caramail.fr");
        expect(savedUser.password).toBe("secured-password-1020");
    });
});
