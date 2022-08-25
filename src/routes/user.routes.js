const Router = require( 'express' );

const router = new Router;

const userController = require( '../controller/user.controller' );


router.post( '/signup', userController.CreateUser );

router.post( '/login', userController.AuthUser )

module.exports = router;