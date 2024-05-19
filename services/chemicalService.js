const dbconnection = require('../config/database');

const GetChemical = async () => {
    return new Promise((resolve, reject) => {
        const sql = "Select * from chemical";
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

const AddChemical = async (obj) => {
    return new Promise((resolve, reject) => {
        const createdOn = new Date();
        const sql = `insert into chemical(
            chemical_type, product,
            supplier_name, chemical_name,
            quantity, rate, used_for, packaging_details,createdOn
         ) Values(?,?,?,?,?,?,?,?,?) `;

        const Values = [
            obj.chemical_type,
            obj.product,
            obj.supplier_name,
            obj.chemical_name,
            obj.quantity,
            obj.rate,
            obj.used_for,
            obj.packaging_details,
            createdOn
        ]

        dbconnection.query(sql,Values,(error,result)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(result)
            }
        })
    })
}

const UpdateChemical = async (id,obj) => {
    return new Promise((resolve, reject) => {
        const modifiedOn = new Date();
        const sql = `Update chemical set 
            chemical_type = ?, product = ?,
            supplier_name = ?, chemical_name = ?,
            quantity = ?, rate = ?, used_for = ?, 
            packaging_details = ?,modifiedOn = ?
            where id = ? `;

        const Values = [
            obj.chemical_type,
            obj.product,
            obj.supplier_name,
            obj.chemical_name,
            obj.quantity,
            obj.rate,
            obj.used_for,
            obj.packaging_details,
            modifiedOn,
            id
        ]

        dbconnection.query(sql,Values,(error,result)=>{
            if(error){
                reject(error)
            }
            else{
                resolve(result)
            }
        })
    })
}

module.exports = {
    GetChemical,
    AddChemical,
    UpdateChemical
}