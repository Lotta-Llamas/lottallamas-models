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
			id: '1FBuCHMw5e5yTNKbf1eJq1bXZjoGaXeqwV',
			nickName: 'Tom',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Wallets', null, {});
	}
};
