'use strict';

const uuid = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		const wallets = await queryInterface.sequelize.query(
			`SELECT id, address from "Wallets";`
		);

		const content = await queryInterface.sequelize.query(
			`SELECT id from "Content";`
		);

		await queryInterface.bulkInsert('Posts', [{
			id: uuid.v4(),
			message: 'Test 1',
			creatorAddress: wallets[0][0].address,
			walletId: wallets[0][0].id,
			contentId: content[0][0].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			message: 'Test 2',
			creatorAddress: wallets[0][0].address,
			walletId: wallets[0][0].id,
			contentId: content[0][0].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			message: 'Test 3',
			creatorAddress: wallets[0][1].address,
			walletId: wallets[0][1].id,
			contentId: content[0][1].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			message: 'Test 4',
			creatorAddress: wallets[0][1].address,
			walletId: wallets[0][1].id,
			contentId: content[0][1].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},
	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Posts', null, {});
	}
};
