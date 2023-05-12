'use strict';
const { Model } = require('sequelize');
const uuid = require('uuid');

module.exports = (sequelize, DataTypes) => {
	class Content extends Model {
		static associate(models) {
			Content.belongsTo(models.Wallet, { foreignKey: 'walletId' });
			Content.hasMany(models.Post, { foreignKey: 'contentId', as: 'posts' })
		}
	}

	Content.init({
		walletId: DataTypes.STRING,
		title: DataTypes.STRING,
		description: DataTypes.STRING,
		isPublic: DataTypes.BOOLEAN,
		token: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Content',
		tableName: 'Content',
		freezeTableName: true
	});

	Content.beforeCreate(content => content.id = uuid.v4());

	return Content;
};