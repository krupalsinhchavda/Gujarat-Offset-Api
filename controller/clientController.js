const clientService = require('../services/clientService')

const GetClients = async (req, res) => {
    try {

        const client = await clientService.GetClients();
        
        res.status(200).json({
            message: "GET Client Data Successfully",
            Data: client
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        })
    }
}

const AddClients = async (req, res) => {
    try {
        const {
            name,
            phone,
            email,
            delivery_address,
            contact_person,
            opening_hours,
            multiple_address
        } = req.body
        const obj = {
            name,
            phone,
            email,
            delivery_address,
            contact_person,
            opening_hours,
            multiple_address
        }

        const client = await clientService.AddClients(obj);

        res.status(201).json({
            message: "Client Add Successfully",
            Data: client
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const UpdateClients = async (req, res) => {
    try {
        const {
            name,
            phone,
            email,
            delivery_address,
            contact_person,
            opening_hours,
            multiple_address
        } = req.body
        const obj = {
            name,
            phone,
            email,
            delivery_address,
            contact_person,
            opening_hours,
            multiple_address
        }
        const id = req.params.id
        const client = await clientService.UpdateClients(id, obj);

        res.status(200).json({
            message: "Client Update Successfully",
            Data: client
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const GetClientById = async (req, res) => {
    try {
        const id = req.params.id;

        const client = await clientService.GetClientById(id);

        if (client.length == 0) {
            res.status(404).json({
                message: "Record Not Found"
            })
        }
        else {
            res.status(200).json({
                message: "Get Record By Id Successfully",
                Data: client
            })
        }
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

const DeleteClientById = async (req, res) => {
    try {
        const id = req.params.id;

        const client = await clientService.DeleteClientById(id);

        if (client.length == 0) {
            res.status(404).json({
                message: "Record Not Found"
            })
        }
        else {
            res.status(200).json({
                message: "Delete Record Successfully",
                Data: client
            })
        }
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            error:error.message
        })
    }
}
module.exports = {
    GetClients,
    AddClients,
    UpdateClients,
    GetClientById,
    DeleteClientById
}