'use strict';
const uuid = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Wallets', [{
			id: uuid.v4(),
			nickName: 'Bob',
			address: '14GRxZmNCLHo5Uknr2XYnGA61Hh9uMULXV',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			nickName: 'Tom',
			address: '19h8nvZWqzpZnEufu611ZG6uZ5jYN1tytn',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			nickName: 'Larry',
			address: '12YPS9sNbu2Umrmorgs18Bjb1J1webnwLk',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			nickName: 'Frank',
			address: '1LvdheuzDNJtDnNhmZLUKQ6wRum5zbyKHw',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Wallets', null, {});
	}
};
