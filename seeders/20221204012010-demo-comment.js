'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Comments', [{
			comment: 'Test Comment 1',
			postId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			comment: 'Test Comment 2',
			postId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			comment: 'Test Comment 3',
			postId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			comment: 'Test Comment 4',
			postId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Comments', null, {});
	}
};
