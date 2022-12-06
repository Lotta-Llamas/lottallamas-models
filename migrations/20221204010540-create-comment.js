'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Comments', {
			id: {
				type: Sequelize.UUID,
				allowNull: false,
				primaryKey: true
			},
			comment: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			postId: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'Posts',
					key: 'id',
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Comments');
	}
};