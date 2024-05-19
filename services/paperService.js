const dbconnection = require('../config/database');

const GetPaper = async () => {
    return new Promise((resolve, reject) => {
        const sql = "Select * from paper";
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

const AddPaper = async (obj) => {
    return new Promise((resovle, reject) => {
        const requiredFields = ['size', 'gsm', 'make', 'mill', 'brand_name', 'packaging_details'];
        for (const field of requiredFields) {
            if (!obj[field]) {
                return reject(new Error(`Field '${field}' is required`));
            }
        }
        
        const createdOn = new Date();

        const sql = ` insert into paper
        (size,gsm,make, mill,brand_name,packaging_details,createdOn)
        values(?,?,?,?,?,?,?)
        `;
        const values = [
            obj.size,
            obj.gsm,
            obj.make,
            obj.mill,
            obj.brand_name,
            obj.packaging_details,
            createdOn
        ]
        dbconnection.query(sql, values, (error, result) => {
            if (error) {
                reject(error)
            }
            else if (result.affectedRows === 0) {
                reject(new Error('Failed to create paper: No rows affected'));
            } else {
                resovle(result)
            }
        })
    })
}

const UpdatePaper = async (id, obj) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("ID is required"));
            return;
        }
        const modifiedOn = new Date();

        const sql = `
            UPDATE paper SET 
                size = ?, 
                gsm = ?, 
                make = ?, 
                mill = ?, 
                brand_name = ?, 
                packaging_details = ?, 
                modifiedOn = ?
            WHERE id = ?
        `;

        const values = [
            obj.size,
            obj.gsm,
            obj.make,
            obj.mill,
            obj.brand_name,
            obj.packaging_details,
            modifiedOn,
            id
        ];

        dbconnection.query(sql, values, (error, result) => {
            if (error) {
                reject(error);
            } else if (result.affectedRows === 0) {
                reject(new Error('No record found with the provided id.'));
            } else {
                resolve(result);
            }
        });
    });
};

const GetPaperById = async (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("ID is required"));
            return;
        }
        const sql = "select * from paper where id = ?";
        dbconnection.query(sql, [id], (error, result) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(result)
            }
        })
    })
}
const DeletePaperById = async (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject(new Error("ID is required"));
            return;
        }
        const sql = "delete from paper where id = ?";
        dbconnection.query(sql, [id], (error, result) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(result)
            }
        })
    })
}
module.exports = {
    GetPaper,
    AddPaper,
    UpdatePaper,
    GetPaperById,
    DeletePaperById

}