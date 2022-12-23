'use strict';

const uuid = require('uuid');
const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		const posts = await queryInterface.sequelize.query(
			`SELECT id from "Posts";`
		);

		const wallets = await queryInterface.sequelize.query(
			`SELECT id from "Wallets";`
		);

		await queryInterface.bulkInsert('Comments', [{
			id: uuid.v4(),
			comment: faker.lorem.paragraph(),
			postId: posts[0][0].id,
			walletId: wallets[0][0].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			comment: faker.lorem.paragraph(),
			postId: posts[0][0].id,
			walletId: wallets[0][0].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			comment: faker.lorem.paragraph(),
			postId: posts[0][1].id,
			walletId: wallets[0][1].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			id: uuid.v4(),
			comment: faker.lorem.paragraph(),
			postId: posts[0][1].id,
			walletId: wallets[0][1].id,
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Comments', null, {});
	}
};
