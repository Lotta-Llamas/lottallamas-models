'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Wallets', [{
			nickName: 'Bob',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			nickName: 'Tom',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			nickName: 'Larry',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			nickName: 'Frank',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Wallets', null, {});
	}
};
