import mongoose, { Document } from 'mongoose';
export interface IService extends Document {
    title: string;
    description: string;
    category: string;
    duration: number;
    pricingClinic: number;
    pricingHome: number;
    homeVisitAvailable: boolean;
    clinicVisitAvailable: boolean;
    images: string[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Service: mongoose.Model<any, {}, {}, {}, any, any>;
