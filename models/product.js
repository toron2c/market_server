'use strict';
const {
  Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( { order, product_order, cart, cart_product } ) {
      this.belongsToMany( order, { as: 'Product', through: product_order, foreignKey: 'product_id', otherKey: 'order_id' } );
      this.belongsToMany( cart, { as: 'ProductCart', through: cart_product, foreignKey: 'product_id', otherKey: 'cart_id' } );
    }
  }
  product.init( {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url_img: {
      type: DataTypes.STRING,
      allowNULL: false,
      unique: true
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'product',
    tableName: 'product'
  } );
  return product;
};