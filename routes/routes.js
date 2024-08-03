const express = require('express');
const router = express.Router();
const Model = require('../models/data');
 

 
router.post('/persons', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        website: req.body.website,
        company: req.body.company
    });

    try {
        const dataToSave = await data.save(); 
        res.status(200).json(dataToSave); 
    } catch (err) { 
        res.status(400).json({ message: err.message });
    }
});

router.get('/persons', async (req, res) => {
    try {
        const data = await Model.find(); 
        res.json(data);
    } catch (err) { 
        res.status(500).json({ message: err.message });
    }
});

router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updateData, options
        )

        res.send(result)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
 

module.exports = router;
