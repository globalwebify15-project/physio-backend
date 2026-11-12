import mongoose, { Document } from 'mongoose';
export interface INotification extends Document {
    userId: mongoose.Types.ObjectId;
    title: string;
    body: string;
    type: 'booking_alert' | 'payment_alert' | 'reminder' | 'announcement';
    isRead: boolean;
    metadata?: any;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Notification: mongoose.Model<any, {}, {}, {}, any, any>;
