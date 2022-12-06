'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Post extends Model {
		static associate(models) {
			Post.belongsTo(models.Wallet, { foreignKey: 'walletId' });
			Post.belongsTo(models.Content, { foreignKey: 'contentId' })
			Post.hasMany(models.Comment, { foreignKey: 'postId' })
		}
	}

	Post.init({
		message: DataTypes.STRING,
		creatorAddress: DataTypes.STRING,
		walletId: DataTypes.UUID,
		contentId: DataTypes.UUID
	}, {
		sequelize,
		modelName: 'Post',
	});

	return Post;
};