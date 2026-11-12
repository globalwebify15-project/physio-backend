import mongoose, { Document } from 'mongoose';
export interface IPaymentHistory {
    status: 'pending' | 'paid' | 'failed' | 'refunded';
    timestamp: Date;
    note?: string;
}
export interface IPayment extends Document {
    appointmentId: mongoose.Types.ObjectId;
    razorpayOrderId: string;
    razorpayPaymentId?: string;
    razorpaySignature?: string;
    amount: number;
    currency: string;
    status: 'pending' | 'paid' | 'failed' | 'refunded';
    receiptSent?: boolean;
    receiptSentAt?: Date;
    history: IPaymentHistory[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const Payment: mongoose.Model<any, {}, {}, {}, any, any>;
