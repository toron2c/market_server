const { product } = require( './../../models' )
const { Op } = require( 'sequelize' );

class ProductController {

    /**
     * get all products
     */
    async getProducts( req, res ) {

        try {
            const products = await product.findAll( {
                where: {
                    count: {
                        [Op.gt]: 0
                    }
                },
                attributes: ['name', 'url_img', 'price', 'count', 'id']
            } );
            return res.status( 200 ).json( { products: [...products], "msg": "ok", status: 0 } );
        } catch ( e ) {
            console.log( e );
            return res.status( 400 ).json( { msg: "error", status: 1 } );
        }
    }

    /**
     * get product
     */
    async getProduct( req, res ) {
        const { id } = req.params;
        try {
            const curr_product = await product.findOne( { where: { id: id } } );
            return res.status( 200 ).json( curr_product );
        } catch ( e ) {
            return res.status( 400 ).json( { error: "error", status: 1 } );
        }
    }

    /**
     * get short product info
     */
    async getShortProductInfo( req, res ) {
        const { id } = req.params;
        try {
            const curr_product = await product.findOne( {
                where: { id: id },
                attributes: ['name', 'url_img', 'price', 'count', 'description']
            } )
            curr_product.dataValues.description = curr_product.dataValues.description.split( '' ).slice( 0, 50 ).join( '' );
            return res.status( 200 ).json( curr_product )
        } catch ( e ) {
            console.log( e );
            return res.status( 400 ).json( { msg: "ok", status: 1 } )
        }
    }
}


module.exports = new ProductController();