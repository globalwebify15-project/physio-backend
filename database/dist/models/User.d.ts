import mongoose, { Document } from 'mongoose';
export interface IUser extends Document {
    mobile: string;
    email?: string;
    role: 'patient' | 'admin' | 'superadmin' | 'receptionist' | 'therapist';
    passwordHash?: string;
    fcmTokens?: string[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const User: mongoose.Model<any, {}, {}, {}, any, any>;
