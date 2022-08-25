'use strict';
const {
  Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
  class product_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
    }
  }
  product_order.init( {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'order',
        key: 'order_id'
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
    modelName: 'product_order',
    tableName: 'product_order'
  } );
  return product_order;
};