"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_utils_1 = require("../src/utils/env-utils");
(0, env_utils_1.loadEnvConfig)();
describe('MongoDB Connexion', () => {
    it('should connect successfully to the database', async () => {
        const uri = process.env.MONGODB_URI || '';
        await expect(mongoose_1.default.connect(uri)).resolves.toBeDefined();
        await mongoose_1.default.disconnect();
    });
});
