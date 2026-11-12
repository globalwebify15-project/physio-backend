import mongoose from 'mongoose';
declare global {
    var mongooseConnection: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    } | undefined;
}
export declare const connectDB: () => Promise<typeof mongoose>;
export declare const disconnectDB: () => Promise<void>;
