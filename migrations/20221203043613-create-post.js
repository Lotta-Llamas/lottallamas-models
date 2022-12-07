'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Posts', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},
			message: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			walletId: {
				type: Sequelize.STRING,
				allowNull: false,
				references: {
					model: 'Wallets',
					key: 'id',
				},
			},
			contentId: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'Content',
					key: 'id',
				},
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
		await queryInterface.dropTable('Posts');
	}
};