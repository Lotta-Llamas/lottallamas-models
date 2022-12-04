'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Posts', [{
			message: 'Test 1',
			walletId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			message: 'Test 2',
			walletId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			message: 'Test 3',
			walletId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			message: 'Test 4',
			walletId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Posts', null, {});
	}
};
