const express = require( 'express' );

const cors = require( 'cors' );

const userRouter = require( './routes/user.routes' );

const orderRouter = require( './routes/order.routes' );

const productRouter = require( './routes/product.routes' );

const cartRouter = require( './routes/cart.routes' )

const { sequelize } = require( '../models' );



const PORT = process.env.PORT || 6565;

const app = express();

app.use( cors() )

app.use( express.json() );

app.use( '/img',
    express.static( `${__dirname}/img/product` ) )


app.use( '/api/user', userRouter );

app.use( '/products', productRouter );

app.use( '/order', orderRouter );

app.use( '/api', cartRouter );

app.listen( PORT, async () => {
    // sequelize.sync( { force: true } )
    console.log( `server started... on port = ${PORT}` );

} )

/*
    // sequelize.sync( { force: true } )
    // const us = await user.findOne( { where: { user_login: "123" } } )
    // if ( ( await us.validPass( "123" ) ) ) {
    //     console.log( 123 );
    // }
    // const us = await user.create( { user_login: "321", password: "321" } );
    // const us2 = await user.create( { user_login: "123", password: "123" } );
    // const orders = await order.create( { user_id: 1 } )
    // const orders = await order.findOne( { where: { user_id: 1 } } )
    // const products = await product.findOne( { where: { product_id: 1 } } )
    // await orders.addProduct( products, { through: { countProduct: 3 } } )
    // console.log( products );
    // const orders = await user.findOne( {
    //     where: {
    //         user_id: 1
    //     },
    //     include: order
    // } )
    // console.log( orders.dataValues.orders );


    // создание заказа
    // const products = [{ id: 1, count: 19 }]
    // const newOrder = await order.create( { user_id: 1 } );
    // products.forEach( async ( element ) => {
    //     const curr_product = await product.findOne( { where: { product_id: element.id } } )
    //     curr_product.count = curr_product.count - element.count;
    //     curr_product.save();
    //     newOrder.addProduct( curr_product, { through: { countProduct: element.count } } )
    // } );
*/