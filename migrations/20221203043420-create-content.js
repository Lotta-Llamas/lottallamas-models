'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Content', {
			id: {
				type: Sequelize.UUID,
				allowNull: false,
				primaryKey: true,
			},
			walletId: {
				type: Sequelize.STRING,
				allowNull: false,
				references: {
					model: 'Wallets',
					key: 'id',
				},
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
			},
			isPublic: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			token: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Content');
	}
};