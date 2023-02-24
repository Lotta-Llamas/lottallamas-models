'use strict';

/** @type {import('sequelize-cli').Migration} */
	module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.addColumn('Comments', 'isDeleted', {
			type: Sequelize.DataTypes.BOOLEAN,
			defaultValue: false
		});
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.removeColumn('Comments', 'isDeleted');
	}
};
