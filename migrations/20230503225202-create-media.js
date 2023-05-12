'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Media', {
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
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
		usage: {
			type: Sequelize.ENUM,
			values: ['post', 'avatar', 'content'],
			defaultValue: 'post'
		},
		isDeleted: {
			type: Sequelize.BOOLEAN,
			defaultValue: false
		},
		originalname: {
			type: Sequelize.STRING,
		},
		mimetype: {
			type: Sequelize.STRING,
		},
		isPublic: {
			type: Sequelize.BOOLEAN,
			defaultValue: true
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
		await queryInterface.dropTable('Media');
	}
};