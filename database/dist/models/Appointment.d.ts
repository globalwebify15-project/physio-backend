import mongoose, { Document } from 'mongoose';
export interface IStatusTimeline {
    status: 'pending' | 'confirmed' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
    timestamp: Date;
    note?: string;
}
export interface IAppointment extends Document {
    patientId: mongoose.Types.ObjectId;
    serviceId: mongoose.Types.ObjectId;
    therapistId?: mongoose.Types.ObjectId;
    date: string;
    timeSlot: string;
    visitType: 'clinic' | 'home';
    address?: string;
    status: 'pending' | 'confirmed' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
    statusTimeline: IStatusTimeline[];
    paymentId?: mongoose.Types.ObjectId;
    totalAmount?: number;
    discount?: number;
    couponCode?: string;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const Appointment: mongoose.Model<any, {}, {}, {}, any, any>;
