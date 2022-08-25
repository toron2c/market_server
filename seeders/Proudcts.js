'use strict';

module.exports = {
  async up( queryInterface, Sequelize ) {
    /**
     * Add seed commands here.
     *     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert( 'product', [{
      name: 'Notebook',
      price: 25000,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolorum nam accusantium consequuntur reiciendis soluta ducimus provident commodi, alias ab suscipit asperiores enim praesentium id officiis illum nesciunt quidem optio quam adipisci maiores cumque iusto vero. Laboriosam, perferendis voluptatibus iure dolor asperiores atque eos. Beatae magni repellat eligendi et dignissimos in natus ipsum porro expedita est delectus odit, quibusdam voluptas, laborum eum voluptatibus molestiae? Obcaecati nesciunt, similique modi praesentium consectetur aliquid voluptas doloribus repellat nulla!",
      url_img: 'notebook.png',
      count: 20
    }], {} )
    await queryInterface.bulkInsert( 'product', [{
      name: 'Notebook Air',
      price: 50000,
      description: "Ноутбук Apple MacBook Air 13 Late являются одной из самых интригующих новинок «яблочной» компании. Не каждый день вас могут порадовать выпуском не просто компактного, а ультракомпактного и в то же время энергоёмкого ноутбука. Модель Apple MacBook Air 13 Late безупречно справляется с этой ролью.",
      url_img: 'air.png',
      count: 20
    }], {} )

    await queryInterface.bulkInsert( 'product', [{
      name: 'Notebook Pro',
      price: 70000,
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus aut hic obcaecati dignissimos blanditiis eligendi officia vero reiciendis, quia libero mollitia minus, accusantium beatae voluptate et dicta autem consequatur distinctio voluptates asperiores, velit odio aperiam? Culpa aut placeat quaerat debitis ipsa. Aperiam autem eaque et provident reprehenderit tempore unde vero!",
      url_img: 'notebookpro.png',
      count: 20
    }], {} )

    await queryInterface.bulkInsert( 'product', [{
      name: 'iphone',
      price: 50000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolorum nam accusantium consequuntur reiciendis soluta ducimus provident commodi, alias ab suscipit asperiores enim praesentium id officiis illum nesciunt quidem optio quam adipisci maiores cumque iusto vero. Laboriosam, perferendis voluptatibus iure dolor asperiores atque eos. Beatae magni repellat eligendi et dignissimos in natus ipsum porro expedita est delectus odit, quibusdam voluptas, laborum eum voluptatibus molestiae? Obcaecati nesciunt, similique modi praesentium consectetur aliquid voluptas doloribus repellat nulla!',
      url_img: 'iphone.png',
      count: 35
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: 'Квадракоптер',
      price: 500000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'diji.png',
      count: 30
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: "Монитор",
      price: 30000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'monitor.png',
      count: 100,
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: "Телефон",
      price: 10000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'phone_01.png',
      count: 1000
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: 'Playstation 4',
      price: 50000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'ps4.png',
      count: 79
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: 'Playstation 5',
      price: 75000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'ps5.png',
      count: 200
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: 'Телефон Samsung',
      price: 75000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'samsunng.png',
      count: 500,
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: 'TV',
      price: 75000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'tv0.png',
      count: 200
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: 'TV BHaier',
      price: 75000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'tv1.png',
      count: 200
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: 'TV LG',
      price: 75000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'tvlg.png',
      count: 200
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: 'TV samsung',
      price: 75000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'tvsamsung.png',
      count: 200
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: 'TV Sony',
      price: 75000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'tvsony.png',
      count: 200
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: 'TV  Sony Robot 5000',
      price: 75000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'tvsony2.png',
      count: 200
    }] )

    await queryInterface.bulkInsert( 'product', [{
      name: 'Xbox',
      price: 75000,
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam voluptates error ullam, eius debitis deserunt aliquam saepe sunt. Minima deserunt quis quaerat tenetur debitis placeat?',
      url_img: 'xbox.png',
      count: 200
    }] )
  },

  async down( queryInterface, Sequelize ) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
