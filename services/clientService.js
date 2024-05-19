const dbconnection = require('../config/database');

const GetClients = async () => {
    return new Promise((resolve, reject) => {
        const sql = "select * from clients";

        dbconnection.query(sql, (error, result) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(result)
            }
        })
    })
}
const AddClients = async (obj) => {
    return new Promise((resolve, reject) => {
        if (!obj.name || !obj.phone || !obj.email || !obj.delivery_address || !obj.contact_person || !obj.opening_hours || obj.multiple_address == null) {
            reject(new Error('Invalid input parameters'));
            return;
        }

        const createdOn = new Date();
        const sql = `
            INSERT INTO clients (
                name, phone, email, delivery_address,
                contact_person, opening_hours,
                multiple_address, createdOn
            ) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            obj.name,
            obj.phone,
            obj.email,
            obj.delivery_address,
            obj.contact_person,
            obj.opening_hours,
            obj.multiple_address,
            createdOn
        ];

        dbconnection.query(sql, values, (error, result) => {
            if (error) {
                reject(error);
            } else if (result.affectedRows === 0) {
                reject(new Error('Failed to create client: No rows affected'));
            } else {
                resolve(result);
            }
        });
    });
};

const UpdateClients = async (id, obj) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("ID is required"));
            return;
        }
        modifiedOn = new Date();
        const sql = `Update clients set name = ?, phone = ?, email = ? ,
        delivery_address = ?,contact_person = ?, opening_hours = ?,multiple_address = ?,
        modifiedOn = ?  where id = ?`
        const values = [
            obj.name,
            obj.phone,
            obj.email,
            obj.delivery_address,
            obj.contact_person,
            obj.opening_hours,
            obj.multiple_address,
            modifiedOn,
            id
        ];

        dbconnection.query(sql, values, (error, result) => {
            if (error) {
                reject(error);
            } else if (result.affectedRows === 0) {
                reject(new Error('Provided ID Not Exits'));
            } else {
                resolve(result);
            }
        })
    })
}

const GetClientById = async (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("ID is required"));
            return;
        }
        const sql = "Select * from clients where id = ?";
        dbconnection.query(sql, [id], (error, result) => {
            if (error) {
                reject(error)
            }
            else {
                if (result.affectedRows === 0) {
                    reject(new Error("No record found with the provided ID"));
                } else {
                    resolve(result);
                }
            }
        })
    })
}

const DeleteClientById = async (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("ID is required"));
            return;
        }

        const sql = "DELETE FROM clients WHERE id = ?";
        dbconnection.query(sql, [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                if (result.affectedRows === 0) {
                    reject(new Error("No record found with the provided ID"));
                } else {
                    resolve(result);
                }
            }

        });
    });
};

module.exports = {
    GetClients,
    AddClients,
    UpdateClients,
    GetClientById,
    DeleteClientById
}