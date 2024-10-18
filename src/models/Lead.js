const mongoose = require('mongoose');

// Pre-purchase Inspection Schema
const prePurchaseInspectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    serviceType: { type: String, required: true },
    message: { type: String },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },

});



// Car Insurance Schema
const carInsuranceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    carModel: { type: String, required: true },
    insuranceType: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
});

// Sell Your Car Schema
const sellYourCarSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    carMake: { type: String, required: true },
    carModel: { type: String, required: true },
    manufactureDate: { type: Date, required: true },
    askingPrice: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
});

// Car Valuation Schema
const carValuationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    carMake: { type: String, required: true },
    carModel: { type: String, required: true },
    manufactureDate: { type: Date, required: true },
    mileage: { type: Number, required: true },
    carCondition: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },

});

// Key Duplication Schema
const keyDuplicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    carModel: { type: String, required: true },
    keyDescription: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },

});

// My Garage Schema
const myGarageSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    vehicles: [{
        make: { type: String, required: true },
        model: { type: String, required: true },
        manufactureDate: { type: Date, required: true },
        mileage: { type: Number, required: true },
        carCondition: { type: String, required: true },
        description: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    }],
});

// Concierge Service Schema
const conciergeServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'In Progress', 'Completed'], default: 'Pending' },
});

// Create Models
const PrePurchaseInspection = mongoose.model('PrePurchaseInspection', prePurchaseInspectionSchema);
const CarInsurance = mongoose.model('CarInsurance', carInsuranceSchema);
const SellYourCar = mongoose.model('SellYourCar', sellYourCarSchema);
const CarValuation = mongoose.model('CarValuation', carValuationSchema);
const KeyDuplication = mongoose.model('KeyDuplication', keyDuplicationSchema);
const MyGarage = mongoose.model('MyGarage', myGarageSchema);
const ConciergeService = mongoose.model('ConciergeService', conciergeServiceSchema);

// Export Models
module.exports = {
    PrePurchaseInspection,
    CarInsurance,
    SellYourCar,
    CarValuation,
    KeyDuplication,
    MyGarage,
    ConciergeService,
};
