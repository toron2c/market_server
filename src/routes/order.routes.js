const Route = require( 'express' );

const router = new Route();

const orderController = require( '../controller/order.controller' );


// get all orders user
router.get( '/my-orders/:id', orderController.getOrders );

// post order
router.post( '/my-orders', orderController.createOrder )

module.exports = router;