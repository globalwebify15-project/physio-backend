import mongoose, { Document } from 'mongoose';
export interface IReview extends Document {
    patientId: mongoose.Types.ObjectId;
    therapistId?: mongoose.Types.ObjectId;
    serviceId?: mongoose.Types.ObjectId;
    appointmentId?: mongoose.Types.ObjectId;
    rating: number;
    comment?: string;
    isModerated: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Review: mongoose.Model<any, {}, {}, {}, any, any>;
