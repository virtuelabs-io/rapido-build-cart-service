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
    let data = event.body
    let query = `
        INSERT INTO
            cart.items (
                customer_id,
                product_id,
                quantity,
                in_cart
            )
        VALUES (UUID_TO_BIN(?),?,?,?)
        ON DUPLICATE KEY UPDATE
        quantity = ?,
        in_cart = ?
    `;

    console.log("Running query", query);
    let results = await mysql.query(query, [
            customer_id,
            data.product_id,
            data.quantity,
            data.in_cart,
            data.quantity,
            data.in_cart
        ]
    )
    await mysql.end()
    return results
}
