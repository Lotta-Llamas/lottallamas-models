'use strict';

const uuid = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		const wallets = await queryInterface.sequelize.query(
			`SELECT id, address from "Wallets";`
		);

		await queryInterface.bulkInsert('Content', [{
			id: uuid.v4(),
			token: 'LLAMAS.test',
			walletId: wallets[0][0].id,
			creatorAddress: wallets[0][0].address,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			token: 'LLAMAS.test1',
			walletId: wallets[0][0].id,
			creatorAddress: wallets[0][0].address,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			token: 'LLAMAS.test2',
			walletId: wallets[0][1].id,
			creatorAddress: wallets[0][1].address,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			token: 'LLAMAS.test3',
			walletId: wallets[0][1].id,
			creatorAddress: wallets[0][1].address,
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Content', null, {});
	}
};
