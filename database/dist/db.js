"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDB = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load env vars
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../atlas-cred.env') });
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../atlas-cred.env') });
dotenv_1.default.config();
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error('CRITICAL CONFIG ERROR: MONGODB_URI env variable is not set. The platform is configured to connect ONLY to MongoDB Atlas. Please configure the MONGODB_URI variable in your .env files.');
}
const connectionString = MONGODB_URI;
let cached = global.mongooseConnection;
if (!cached) {
    cached = global.mongooseConnection = { conn: null, promise: null };
}
const connectDB = async () => {
    if (mongoose_1.default.connection.readyState >= 1) {
        return mongoose_1.default;
    }
    if (cached && cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        cached.promise = mongoose_1.default.connect(connectionString, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
        }).then((m) => {
            console.log('MongoDB successfully connected.');
            return m;
        });
    }
    try {
        cached.conn = await cached.promise;
    }
    catch (error) {
        cached.promise = null;
        console.error('MongoDB connection error:', error);
        throw error;
    }
    return cached.conn;
};
exports.connectDB = connectDB;
const disconnectDB = async () => {
    if (mongoose_1.default.connection.readyState === 0) {
        return;
    }
    await mongoose_1.default.disconnect();
    if (cached) {
        cached.conn = null;
        cached.promise = null;
    }
    console.log('MongoDB disconnected.');
};
exports.disconnectDB = disconnectDB;
