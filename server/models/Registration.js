import mongoose from "mongoose";

const RegistrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    branch: { type: String, required: true },
    year: { type: String, required: true },
    college: { type: String, required: true },
    type: { type: String, default: "Workshop" },
    workshop: { type: String, required: true },
    utr: { type: String },
    fee: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Registration = mongoose.model("Registration", RegistrationSchema);

export default Registration;
