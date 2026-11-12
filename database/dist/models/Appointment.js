"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Appointment = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const AppointmentSchema = new mongoose_1.Schema({
    patientId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Patient', required: true },
    serviceId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Service', required: true },
    therapistId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Therapist' },
    date: { type: String, required: true, index: true }, // Format: YYYY-MM-DD
    timeSlot: { type: String, required: true }, // Format: HH:MM
    visitType: { type: String, enum: ['clinic', 'home'], required: true },
    address: { type: String }, // optional clinic address, required if home visit
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'assigned', 'in-progress', 'completed', 'cancelled'],
        default: 'pending',
        index: true,
    },
    statusTimeline: [
        {
            status: { type: String, required: true },
            timestamp: { type: Date, default: Date.now },
            note: { type: String },
        },
    ],
    paymentId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Payment' },
    totalAmount: { type: Number },
    discount: { type: Number, default: 0 },
    couponCode: { type: String },
    notes: { type: String },
}, { timestamps: true });
// Index to quickly check therapist conflicts
AppointmentSchema.index({ therapistId: 1, date: 1, timeSlot: 1 }, { unique: true, sparse: true });
exports.Appointment = mongoose_1.default.models.Appointment || mongoose_1.default.model('Appointment', AppointmentSchema);
