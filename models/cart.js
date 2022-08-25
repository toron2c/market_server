'use strict';
const {
    Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
    class cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate( { user, product, cart_product } ) {
            this.hasOne( user, { foreignKey: 'user_id' } )
            this.belongsToMany( product, { as: 'ProductCart', through: cart_product, foreignKey: 'cart_id', otherKey: 'product_id' } )
        }
    }
    cart.init( {
        cart_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            reference: {
                model: 'user',
                key: 'user_id'
            }
        },
    }, {
        sequelize,
        modelName: 'cart',
        tableName: 'cart'
    } );
    return cart;
};