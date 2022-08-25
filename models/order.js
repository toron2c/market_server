'use strict';
const {
  Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( { user, product_order, product } ) {
      this.belongsTo( user, { foreignKey: 'user_id' } )
      this.belongsToMany( product, { as: 'Product', through: product_order, foreignKey: 'order_id', otherKey: 'product_id' } );
    }
  }
  order.init( {
    order_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: { msg: "The field cannot be empty" }
      },
      reference: {
        model: 'user',
        key: 'user_id'
      }
    },
  },

    {
      sequelize,
      modelName: 'order',
      tableName: 'order'
    } );
  return order;
};