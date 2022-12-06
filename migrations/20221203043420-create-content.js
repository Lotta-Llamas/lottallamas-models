'use strict';
const uuid = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Content', {
			id: {
				type: Sequelize.UUID,
				defaultValue: () => uuid.v4(),
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