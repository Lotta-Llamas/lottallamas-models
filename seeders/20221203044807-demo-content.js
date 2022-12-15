'use strict';

const uuid = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		const wallets = await queryInterface.sequelize.query(
			`SELECT id from "Wallets";`
		);

		await queryInterface.bulkInsert('Content', [{
			id: uuid.v4(),
			title: 'Content Test#1',
			description: 'Content#1',
			isPublic: false,
			token: 'LLAMAS.test1',
			walletId: wallets[0][0].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			title: 'Content Test#2',
			description: 'Content#2',
			isPublic: false,
			token: 'LLAMAS.test2',
			walletId: wallets[0][0].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			title: 'Content Test#3',
			description: 'Content#3',
			isPublic: false,
			token: 'LLAMAS.test3',
			walletId: wallets[0][1].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			title: 'Content Test#4',
			description: 'Content#4',
			isPublic: false,
			token: 'LLAMAS.test4',
			walletId: wallets[0][1].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Content', null, {});
	}
};
