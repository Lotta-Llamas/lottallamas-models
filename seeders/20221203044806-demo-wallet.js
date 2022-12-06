'use strict';
const uuid = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Wallets', [{
			id: '14GRxZmNCLHo5Uknr2XYnGA61Hh9uMULXV',
			nickName: 'Bob',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: '19h8nvZWqzpZnEufu611ZG6uZ5jYN1tytn',
			nickName: 'Tom',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: '12YPS9sNbu2Umrmorgs18Bjb1J1webnwLk',
			nickName: 'Larry',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: '1LvdheuzDNJtDnNhmZLUKQ6wRum5zbyKHw',
			nickName: 'Frank',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Wallets', null, {});
	}
};
