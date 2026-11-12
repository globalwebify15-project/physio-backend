import mongoose, { Document } from 'mongoose';
export interface IWorkingHours {
    start: string;
    end: string;
}
export interface ITherapist extends Document {
    name: string;
    email: string;
    mobile: string;
    profilePhoto?: string;
    qualification: string;
    experience: number;
    specialization: string[];
    workingHours: IWorkingHours;
    workingDays: number[];
    isActive: boolean;
    ratingAverage: number;
    ratingCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Therapist: mongoose.Model<any, {}, {}, {}, any, any>;
