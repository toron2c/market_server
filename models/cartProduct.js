'use strict';
const {
    Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
    class cart_product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate() {

        }
    }
    cart_product.init( {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        cart_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            reference: {
                model: 'cart',
                key: 'cart_id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: { msg: "The field cannot be empty" }
            },
            reference: {
                model: 'product',
                key: 'product_id'
            }
        },
        countProduct: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'cart_product',
        tableName: 'cart_product'
    } );
    return cart_product;
};