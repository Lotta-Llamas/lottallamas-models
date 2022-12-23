'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Comments', {
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				allowNull: false,
				primaryKey: true
			},
			comment: {
				type: Sequelize.TEXT,
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
			walletId: {
				type: Sequelize.STRING,
				allowNull: false,
				references: {
					model: 'Wallets',
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