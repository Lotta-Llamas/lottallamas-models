'use strict';
const { Model } = require('sequelize');
const uuid = require('uuid');

module.exports = (sequelize, DataTypes) => {
	class Post extends Model {
		static associate(models) {
			Post.belongsTo(models.Wallet, { foreignKey: 'walletId' });
			Post.belongsTo(models.Content, { foreignKey: 'contentId' })
			Post.hasMany(models.Comment, { foreignKey: 'postId', as: 'comments' })
		}
	}

	Post.init({
		title: DataTypes.STRING,
		text: DataTypes.TEXT,
		walletId: DataTypes.STRING,
		contentId: DataTypes.UUID,
		isDeleted: DataTypes.BOOLEAN,
		isPublic: DataTypes.BOOLEAN,
	}, {
		sequelize,
		modelName: 'Post',
	});

	Post.beforeCreate(post => post.id = uuid.v4());

	return Post;
};