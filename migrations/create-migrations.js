'use strict';
module.exports = {
  async up( queryInterface, Sequelize ) {
    await queryInterface.createTable( 'user', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
      },
      login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNULL: false,
        unique: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }
    ),
      await queryInterface.createTable( 'product', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING,
          allowNULL: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNULL: false
        },
        price: {
          type: Sequelize.INTEGER
        },
        url_img: {
          type: Sequelize.STRING,
          allowNULL: false,
          unique: true
        },
        count: {
          type: Sequelize.INTEGER,
          allowNULL: false
        },

      } ),
      await queryInterface.createTable( 'order', {
        order_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        totalPrice: {
          allowNULL: false,
          type: Sequelize.INTEGER
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: {
            model: 'user',
            key: 'user_id'
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      } ),
      await queryInterface.createTable( 'product_order', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        order_id: {
          type: Sequelize.INTEGER,
          reference: {
            model: 'order',
            key: 'order_id'
          },
        },
        product_id: {
          type: Sequelize.INTEGER,
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
          type: Sequelize.INTEGER,
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      )

    await queryInterface.createTable( 'cart', {
      cart_id: {
        type: Sequelize.INTEGER,
        allowNULL: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Field cannot be empty"
          },
          reference: {
            model: 'user',
            key: 'user_id'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    } )

    await queryInterface.createTable( 'cart_product', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      cart_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        reference: {
          model: 'cart',
          key: 'cart_id'
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
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
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    )

  },
  async down( queryInterface, Sequelize ) {
    await queryInterface.dropAllTables();
  }
};