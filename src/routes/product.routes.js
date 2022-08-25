const Router = require( 'express' );

const router = new Router;

const productController = require( '../controller/product.controller' );

router.get( '/', productController.getProducts );

router.get( '/:id', productController.getProduct );

router.get( '/short/:id', productController.getShortProductInfo );

module.exports = router;