const Lead = require('../models/Lead');

// @desc    Create a new lead (for any service)
// @route   POST /api/leads
// @access  Public
exports.createLead = async (req, res) => {
    try {
        
        const { name, email, serviceType, message } = req.body;

        if(!name) return res.status(404).send({status:false, msg:"name required"});
        if(!email) return res.status(404).send({status:false, msg:"email required"});
        if(!serviceType) return res.status(404).send({status:false, msg:"serviceType required"});

        const newLead = new Lead({
            name,
            email,
            serviceType,
            message,
        });

        await newLead.save();
        res.status(201).json({ success: true, msg: 'Lead created successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server error', error });
    }
};

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private (for admin use)
exports.getAllLeads = async (req, res) => {
    try {
        const leads = await Lead.find();
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server error', error });
    }
};

// @desc    Get a single lead
// @route   GET /api/leads/:id
// @access  Private
exports.getLeadById = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) return res.status(404).json({ msg: 'Lead not found' });

        res.status(200).json(lead);
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server error', error });
    }
};

// @desc    Delete a lead
// @route   DELETE /api/leads/:id
// @access  Private (for admin use)
exports.deleteLead = async (req, res) => {
    try {
        const lead = await Lead.findById(req.params.id);
        if (!lead) return res.status(404).json({ msg: 'Lead not found' });

        await lead.remove();
        res.status(200).json({ msg: 'Lead removed successfully' });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Server error', error });
    }
};
