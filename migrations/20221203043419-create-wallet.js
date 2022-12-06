'use strict';
const uuid = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Wallets', {
			id: {
				type: Sequelize.UUID,
				defaultValue: () => uuid.v4(),
				allowNull: false,
				primaryKey: true,
			},
			nickName: {
				type: Sequelize.STRING
			},
			address: {
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
		await queryInterface.dropTable('Wallets');
	}
};