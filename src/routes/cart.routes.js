const Router = require( 'express' );

const router = new Router();

const cartController = require( './../controller/cart.controller' );

router.get( '/cart/:id', cartController.getCart );

router.post( '/cart', cartController.PostProductOnCart );

router.put( '/cart', cartController.ChangeCountProductOnCart );


module.exports = router;