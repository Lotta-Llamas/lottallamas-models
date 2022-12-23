'use strict';
const uuid = require('uuid');
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		const wallets = await queryInterface.sequelize.query(
			`SELECT id from "Wallets";`
		);

		const content = await queryInterface.sequelize.query(
			`SELECT id from "Content";`
		);

		await queryInterface.bulkInsert('Posts', [{
			id: uuid.v4(),
			title: 'Test 1',
			text: faker.lorem.paragraph(),
			walletId: wallets[0][0].id,
			contentId: content[0][0].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			title: 'Test 2',
			text: faker.lorem.paragraph(),
			walletId: wallets[0][0].id,
			contentId: content[0][0].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			title: 'Test 3',
			text: faker.lorem.paragraph(),
			walletId: wallets[0][1].id,
			contentId: content[0][1].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			title: 'Test 4',
			text: faker.lorem.paragraph(),
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
