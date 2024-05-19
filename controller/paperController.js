const paperService = require('../services/paperService');

const GetPaper = async (req, res) => {
    try {
        const paper = await paperService.GetPaper();
        res.status(200).json({
            message: "Get Paper Successfully",
            Data: paper
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}
const AddPaper = async (req, res) => {
    try {
        const {
            size,
            gsm,
            make,
            mill,
            brand_name,
            packaging_details

        } = req.body
        const obj = {
            size,
            gsm,
            make,
            mill,
            brand_name,
            packaging_details
        }
        const paper = await paperService.AddPaper(obj);

        res.status(201).json({
            message: "Add Paper Successfully",
            Data: paper
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server Error",
            error: error.message
        })
    }
}
const UpdatePaper = async (req, res) => {
    try {
        const id = req.params.id;
        const {
            size,
            gsm,
            make,
            mill,
            brand_name,
            packaging_details
        } = req.body
        const obj = {
            size,
            gsm,
            make,
            mill,
            brand_name,
            packaging_details
        }
        const paper = await paperService.UpdatePaper(id, obj);
        res.status(200).json({
            message: "Paper Updated Successfully",
            Data: paper
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server Error",
            error: error.message
        })
    }
}

const GetPaperById = async (req, res) => {
    try {
        const id = req.params.id;

        const paper = await paperService.GetPaperById(id);

        res.status(200).json({
            message: "Get Paper By Id Successfully",
            Data: paper
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server Error",
            error: error.message
        })

    }
}
const DeletePaperById = async (req, res) => {
    try {
        const id = req.params.id;

        const paper = await paperService.DeletePaperById(id);

        res.status(200).json({
            message: "Delete Paper Successfully",
            Data: paper
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server Error",
            error: error.message
        })

    }
}
module.exports = {
    GetPaper,
    AddPaper,
    UpdatePaper,
    GetPaperById,
    DeletePaperById
}