const { PrePurchaseInspection, CarInsurance, SellYourCar, CarValuation, KeyDuplication, MyGarage, ConciergeService, } = require('../models/Lead');

// @desc    Create a new lead (for any service)
// @route   POST /api/leads
// @access  Public
exports.createPrePurchaseInspection = async (req, res) => {
    try {

        const { name, email, serviceType, message } = req.body;

        if (!name) return res.status(404).send({ status: false, msg: "name required" });
        if (!email) return res.status(404).send({ status: false, msg: "email required" });
        if (!serviceType) return res.status(404).send({ status: false, msg: "serviceType required" });

        const newLead = new PrePurchaseInspection({ name, email, serviceType, message, });

        await newLead.save();
        res.status(201).json({ success: true, msg: 'Lead created successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server error', error });
    }
};

exports.createCarInsurance = async (req, res) => {
    try {

        const { name, email, carModel, insuranceType } = req.body;

        if (!name) return res.status(404).send({ status: false, msg: "name required" });
        if (!email) return res.status(404).send({ status: false, msg: "email required" });
        if (!carModel) return res.status(404).send({ status: false, msg: "carModel required" });
        if (!insuranceType) return res.status(404).send({ status: false, msg: "InsuranceType required" });

        const newLead = new CarInsurance({ name, email, carModel, insuranceType });

        await newLead.save();
        res.status(201).json({ success: true, msg: 'Lead created successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server error', error });
    }
};

exports.createSellYourCar = async (req, res) => {
    try {

        const { name, email, phone, carMake, carModel, manufactureDate, askingPrice } = req.body;

        if (!name) return res.status(404).send({ status: false, msg: "name required" });
        if (!email) return res.status(404).send({ status: false, msg: "email required" });
        if (!phone) return res.status(404).send({ status: false, msg: "phone required" });
        if (!carMake) return res.status(404).send({ status: false, msg: "carMake required" });
        if (!carModel) return res.status(404).send({ status: false, msg: "carModel required" });
        if (!manufactureDate) return res.status(404).send({ status: false, msg: "manufactureDate required" });
        if (!askingPrice) return res.status(404).send({ status: false, msg: "askingPrice required" });

        const newLead = new SellYourCar({ name, email, phone, carMake, carModel, manufactureDate, askingPrice });

        await newLead.save();
        res.status(201).json({ success: true, msg: 'Lead created successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server error', error });
    }
};

exports.createCarValuation = async (req, res) => {
    try {

        const { name, email, phone, carMake, carModel, manufactureDate, mileage, carCondition } = req.body;

        if (!name) return res.status(404).send({ status: false, msg: "name required" });
        if (!email) return res.status(404).send({ status: false, msg: "email required" });
        if (!phone) return res.status(404).send({ status: false, msg: "phone required" });
        if (!carMake) return res.status(404).send({ status: false, msg: "carMake required" });
        if (!carModel) return res.status(404).send({ status: false, msg: "carModel required" });
        if (!manufactureDate) return res.status(404).send({ status: false, msg: "manufactureDate required" })
        if (!mileage) return res.status(404).send({ status: false, msg: "mileage required" })
        if (!carCondition) return res.status(404).send({ status: false, msg: "carCondition required" })

        const newLead = new CarValuation({ name, email, phone, carMake, carModel, manufactureDate, mileage, carCondition });

        await newLead.save();
        res.status(201).json({ success: true, msg: 'Lead created successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server error', error });
    }
};

exports.createKeyDuplication = async (req, res) => {
    try {

        const { name, email, phone, carModel, keyDescription } = req.body;

        if (!name) return res.status(404).send({ status: false, msg: "name required" });
        if (!email) return res.status(404).send({ status: false, msg: "email required" });
        if (!phone) return res.status(404).send({ status: false, msg: "phone required" });
        if (!carModel) return res.status(404).send({ status: false, msg: "carModel required" });
        if (!keyDescription) return res.status(404).send({ status: false, msg: "keyDescription required" });


        const newLead = new KeyDuplication({ name, email, phone, carModel, keyDescription });

        await newLead.save();
        res.status(201).json({ success: true, msg: 'Lead created successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server error', error });
    }
};

exports.createMyGarage = async (req, res) => {
    try {

        const { make, model, manufactureDate, mileage, carCondition, description } = req.body;

        if (!make) return res.status(404).send({ status: false, msg: "make required" });
        if (!carCondition) return res.status(404).send({ status: false, msg: "carCondition required" });
        if (!description) return res.status(404).send({ status: false, msg: "description required" });
        if (!model) return res.status(404).send({ status: false, msg: "model required" });
        if (!manufactureDate) return res.status(404).send({ status: false, msg: "manufactureDate required" });
        if (!mileage) return res.status(404).send({ status: false, msg: "mileage required" });

        console.log(req.user)
        const newLead = new MyGarage({ userId: req.user.id, vehicles: [{ make, model, manufactureDate, mileage, carCondition, description }] });

        await newLead.save();
        res.status(201).json({ success: true, msg: 'Lead created successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server error', error });
    }
};

exports.createConciergeService = async (req, res) => {
    try {

        const { name, email, phone, description } = req.body;

        if (!name) return res.status(404).send({ status: false, msg: "name required" });
        if (!email) return res.status(404).send({ status: false, msg: "email required" });
        if (!phone) return res.status(404).send({ status: false, msg: "phone required" });
        if (!description) return res.status(404).send({ status: false, msg: "description required" });

        const newLead = new ConciergeService({ name, email, phone, description });

        await newLead.save();
        res.status(201).json({ success: true, msg: 'Lead created successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server error', error });
    }
};





// // @desc    Get all leads
// // @route   GET /api/leads
// // @access  Private (for admin use)
// exports.getAllLeads = async (req, res) => {
//     try {
//         const leads = await Lead.find();
//         res.status(200).json(leads);
//     } catch (error) {
//         res.status(500).json({ success: false, msg: 'Server error', error });
//     }
// };

// // @desc    Get a single lead
// // @route   GET /api/leads/:id
// // @access  Private
// exports.getLeadById = async (req, res) => {
//     try {
//         const lead = await Lead.findById(req.params.id);
//         if (!lead) return res.status(404).json({ msg: 'Lead not found' });

//         res.status(200).json(lead);
//     } catch (error) {
//         res.status(500).json({ success: false, msg: 'Server error', error });
//     }
// };

// // @desc    Delete a lead
// // @route   DELETE /api/leads/:id
// // @access  Private (for admin use)
// exports.deleteLead = async (req, res) => {
//     try {
//         const lead = await Lead.findById(req.params.id);
//         if (!lead) return res.status(404).json({ msg: 'Lead not found' });

//         await lead.remove();
//         res.status(200).json({ msg: 'Lead removed successfully' });
//     } catch (error) {
//         res.status(500).json({ success: false, msg: 'Server error', error });
//     }
// };
