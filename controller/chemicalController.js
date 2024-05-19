const chemicalService = require('../services/chemicalService');

const GetChemical = async (req, res) => {
    try {

        const chemical = await chemicalService.GetChemical();

        res.status(200).json({
            message: "Get Chemical Successfully",
            Data: chemical
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const UpdateChemical = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            chemical_type, product,
            supplier_name, chemical_name,
            quantity, rate, used_for, packaging_details

        } = req.body
        const obj = {
            chemical_type, product,
            supplier_name, chemical_name,
            quantity, rate, used_for, packaging_details
        }
        const chemical = await chemicalService.UpdateChemical(id, obj);

        res.status(201).json({
            message: "Update Chemical Successfully",
            Data: chemical
        })
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
const AddChemical = async (req, res) => {
    try {
        const {
            chemical_type, product,
            supplier_name, chemical_name,
            quantity, rate, used_for, packaging_details

        } = req.body
        const obj = {
            chemical_type, product,
            supplier_name, chemical_name,
            quantity, rate, used_for, packaging_details
        }
        const chemical = await chemicalService.AddChemical(obj);

        res.status(201).json({
            message: "Add Chemical Successfully",
            Data: chemical
        })
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

module.exports = {
    GetChemical,
    AddChemical,
    UpdateChemical
}