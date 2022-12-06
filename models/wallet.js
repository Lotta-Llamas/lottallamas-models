'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Wallet extends Model {
		static associate(models) {
			Wallet.hasMany(models.Post, { foreignKey: 'walletId' })
			Wallet.hasMany(models.Content, { foreignKey: 'walletId' })
		}
	}

	Wallet.init({
		nickName: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Wallet',
	});

	return Wallet;
};