import mongoose, { Document } from 'mongoose';
export interface IEmergencyContact {
    name: string;
    phone: string;
    relation: string;
}
export interface IPatient extends Document {
    userId: mongoose.Types.ObjectId;
    name: string;
    gender: 'male' | 'female' | 'other';
    dob: Date;
    profilePhoto?: string;
    medicalHistory: string[];
    emergencyContact: IEmergencyContact;
    savedAddresses: string[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const Patient: mongoose.Model<any, {}, {}, {}, any, any>;
