const { user } = require( '../../models' )

class UserController {

    // SignUp user
    async CreateUser( req, res ) {
        const { login, password } = req.body;
        try {
            const new_user = await user.create( {
                login: login,
                password: password
            } )
            const id = new_user.dataValues.user_id;
            return res.status( 200 ).json( { msg: "ok", status: 0, id: id } )
        } catch ( e ) {
            console.log( e );
            return res.status( 400 ).json( { e } )
        }
    }

    //auth user
    async AuthUser( req, res ) {
        const { login, password } = req.body;
        try {
            const us = await user.findOne( {
                where: {
                    login: login
                }
            } )
            if ( !( await us.validPass( password ) ) ) {
                return res.status( 400 ).json( { msg: "Incorrect login or password", status: 1 } )
            }
            const id = us.dataValues.user_id;
            return res.status( 200 ).json( { msg: "ok", id: id, status: 0 } )
        } catch ( e ) {
            console.log( e );
            return res.status( 400 ).json( e );
        }
    }
}

module.exports = new UserController();