import mongoose, { Document } from 'mongoose';
export interface ICMS extends Document {
    key: string;
    content: any;
    updatedBy?: mongoose.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
export declare const CMS: mongoose.Model<any, {}, {}, {}, any, any>;
