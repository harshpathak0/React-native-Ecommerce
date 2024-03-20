const connection = require("../Model/dbConnect")


//////////GET PRODUCT DATA///////////
const getProduct = (req, res) => {
    let sqlQuery = "select * from tbl_retailer_product join  tbl_retailer_description ON ( tbl_retailer_product.product_id = tbl_retailer_description.product_id);"
 connection.query(sqlQuery, (error, result) => {
    if(error){
        res.json("unable to get product data ", error.sqlMessage)
    }
    else{
        res.json(result)
    }
 })
}

//////////GET PARTICULAR DATA PRODUCT DATA///////////
const getProductDetail = (req, res) => {
    let pid = req.query.product_id;
    // let sqlQuery = "Select * from tbl_retailer_product WHERE product_id=?"
    let sqlQuery = "select * from tbl_retailer_product join  tbl_retailer_description"
 connection.query(sqlQuery, [pid], (error, result) => {
    if(error){
        res.json("unable to get product data ", error.sqlMessage)
    }
    else{
        res.json(result)
    }
 })
}



module.exports= {getProduct, getProductDetail}
