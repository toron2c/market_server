const { cart, product, cart_product } = require( '../../models' );

class CartController {

    async getCart( req, res ) {
        const { id } = req.params
        try {
            const curr_cart = await cart.findOne( {
                where: {
                    user_id: id
                }
            } )
            if ( curr_cart === null ) {
                return res.status( 200 ).json( { msg: "ok", status: 0, data: "cart empty" } )
            }
            const list = await cart_product.findAll( {
                where: {
                    cart_id: curr_cart.cart_id
                },
                attributes: ['product_id', 'countProduct']
            } )
            return res.status( 200 ).json( list );
        } catch ( e ) {
            console.log( e );
        }
    }

    async PostProductOnCart( req, res ) {
        const { user_id, product_id } = req.body;
        try {
            let curr_cart = await cart.findOne( {
                where: {
                    user_id: user_id
                }
            } );
            if ( curr_cart === null ) {
                curr_cart = await cart.create( { user_id: user_id } )
            }
            let response = await cart_product.findOne( {
                where: {
                    cart_id: curr_cart.cart_id,
                    product_id: product_id
                }
            } )
            if ( response === null ) {
                const curr_product = await product.findOne( {
                    where: {
                        id: product_id
                    }
                } )
                curr_cart.addProductCart( curr_product, { through: { countProduct: 1 } } );
            } else {
                response.countProduct++;
                response.save();

            }
            return res.status( 200 ).json( { msg: "ok", status: 0 } );
        } catch ( e ) {
            console.log( e );
            return res.status( 400 ).json( "Error" )
        }
    }

    async ChangeCountProductOnCart( req, res ) {
        const { user_id, product_id, action } = req.body;
        try {
            let curr_cart = await cart.findOne( {
                where: {
                    user_id: user_id
                }
            } )
            let element = await cart_product.findOne( {
                where: {
                    product_id: product_id,
                    cart_id: curr_cart.cart_id
                }
            } )
            if ( action === 'increment' ) {
                element.countProduct++;
            } else if ( action === 'decrement' ) {
                if ( element.countProduct === 1 ) {
                    await element.destroy();
                    await element.save();
                    return res.status( 200 ).json( { msg: "ok", status: 0, newCount: 0 } )
                } else {
                    element.countProduct--;
                }
            }
            await element.save();

            let count = element.dataValues.countProduct;
            return res.status( 200 ).json( { msg: "ok", status: 0, newCount: count } );
        } catch ( e ) {
            console.log( e );
            return res.status( 400 ).json( { msg: "error", status: 1 } )

        }
    }
}

module.exports = new CartController();