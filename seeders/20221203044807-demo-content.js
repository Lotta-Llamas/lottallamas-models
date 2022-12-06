'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Content', [{
			token: 'LLAMAS.test',
			walletId: 1,
			creatorAddress: '14GRxZmNCLHo5Uknr2XYnGA61Hh9uMULXV',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			token: 'LLAMAS.test1',
			walletId: 1,
			creatorAddress: '14GRxZmNCLHo5Uknr2XYnGA61Hh9uMULXV',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			token: 'LLAMAS.test2',
			walletId: 2,
			creatorAddress: '19h8nvZWqzpZnEufu611ZG6uZ5jYN1tytn',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			token: 'LLAMAS.test3',
			walletId: 2,
			creatorAddress: '19h8nvZWqzpZnEufu611ZG6uZ5jYN1tytn',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Content', null, {});
	}
};
