'use strict';

const mysql = require('serverless-mysql')({
    config: {
        host: process.env.HOST,
        user: process.env.USERNAME,
        port: process.env.PORT,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
})

module.exports.fun = async (event, context, callback) => {
    global.fetch = require('node-fetch');
    console.log(event)
    let customer_id = event.cognitoPoolClaims.sub
    let query = `
        SELECT  product_id,
                quantity,
                in_cart
        FROM cart.items
        WHERE customer_id = UUID_TO_BIN(?)
        LIMIT 100;
    `;
    console.log("Running query", query);
    let results = await mysql.query(query, [customer_id])
    await mysql.end()
    return results
}
