'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Post extends Model {
		static associate(models) {
			Post.belongsTo(models.Wallet, { foreignKey: 'walletId' });
			Post.hasMany(models.Comment, { foreignKey: 'postId' })
		}
	}

	Post.init({
		message: DataTypes.STRING,
		walletId: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'Post',
	});

	return Post;
};