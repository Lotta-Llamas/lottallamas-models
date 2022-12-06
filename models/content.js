'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Content extends Model {
		static associate(models) {
			Content.belongsTo(models.Wallet, { foreignKey: 'walletId' });
			Content.hasMany(models.Post, { foreignKey: 'contentId' })
		}
	}

	Content.init({
		walletId: DataTypes.UUID,
		creatorAddress: DataTypes.STRING,
		token: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Content',
		tableName: 'Content',
		freezeTableName: true
	});

	return Content;
};