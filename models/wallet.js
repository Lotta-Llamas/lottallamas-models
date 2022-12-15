'use strict';
const { Model } = require('sequelize');
const { uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
	class Wallet extends Model {
		static associate(models) {
			Wallet.hasMany(models.Post, { foreignKey: 'walletId' })
			Wallet.hasMany(models.Content, { foreignKey: 'walletId' })
			Wallet.hasMany(models.Comment, { foreignKey: 'walletId' })
		}
	}

	Wallet.init({
		nickName: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'Wallet',
	});

	return Wallet;
};