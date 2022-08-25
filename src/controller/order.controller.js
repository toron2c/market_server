const { order, user, product, cart, cart_product } = require( './../../models' );

class OrderController {
    /**
     * get all orders user
     */
    async getOrders( req, res ) {
        const { id } = req.params;
        try {
            const orders = await user.findOne( {
                where: {
                    user_id: id
                },
                include: order
            } )
            return res.status( 200 ).json( orders.dataValues.orders );
        } catch ( e ) {
            console.log( e );
            return res.status( 400 ).json( e );
        }
    }

    /**post order */
    async createOrder( req, res ) {
        const { id, products, totalPrice } = req.body;
        try {
            const newOrder = await order.create( { user_id: id, totalPrice: totalPrice } );
            let currCartId = await cart.findOne( { where: { user_id: id } } )
            products.forEach( async ( element ) => {
                const curr_product = await product.findOne( { where: { id: element.id } } );
                curr_product.count = curr_product.count - element.count;
                curr_product.save();
                newOrder.addProduct( curr_product, { through: { countProduct: element.count } } );
            } );
            let oldProducts = await cart_product.findAll( {
                where: {
                    cart_id: currCartId.cart_id
                }
            } )
            oldProducts.forEach( async el => {
                await el.destroy();
                await el.save();
            } )
            return res.status( 200 ).json( { msg: "ok", status: 0 } );
        } catch ( e ) {
            console.log( e );
            return res.status( 200 ).json( e );
        }
    }
}

module.exports = new OrderController();
