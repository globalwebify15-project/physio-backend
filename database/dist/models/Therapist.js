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
exports.Therapist = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const TherapistSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true },
    profilePhoto: { type: String },
    qualification: { type: String, required: true },
    experience: { type: Number, required: true, default: 0 },
    specialization: [{ type: String }],
    workingHours: {
        start: { type: String, required: true, default: '09:00' },
        end: { type: String, required: true, default: '18:00' },
    },
    workingDays: [{ type: Number, default: [1, 2, 3, 4, 5] }], // default Mon-Fri
    isActive: { type: Boolean, default: true },
    ratingAverage: { type: Number, default: 5.0 },
    ratingCount: { type: Number, default: 0 },
}, { timestamps: true });
exports.Therapist = mongoose_1.default.models.Therapist || mongoose_1.default.model('Therapist', TherapistSchema);
