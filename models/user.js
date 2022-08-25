'use strict';
const bcrypt = require( 'bcrypt' );
const {
  Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    validPass( password ) {
      return bcrypt.compareSync( password, this.password );
    }
    static associate( { order, cart } ) {
      this.hasMany( order, { foreignKey: 'user_id' } )
      this.hasOne( cart, { foreignKey: 'cart_id' } )
    }
  }
  user.init( {
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true,
      validate: {
        notEmpty: { msg: "The field cannot be empty" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNULL: false,
      unique: false,
      primaryKey: false,
      set( value ) {
        const hash = bcrypt.hashSync( value, 10 );
        this.setDataValue( 'password', hash );
      },

      validate: {
        notEmpty: { msg: "The field cannot be empty" }
      },
    },
  },

    {
      sequelize,
      modelName: 'user',
      tableName: 'user'
    } );


  return user;
};
