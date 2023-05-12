'use strict';
const { Model } = require('sequelize');
const uuid = require('uuid');

module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		static associate(models) {
			Comment.belongsTo(models.Post, { foreignKey: 'postId' })
			Comment.belongsTo(models.Wallet, { foreignKey: 'walletId' })
		}
	}

	Comment.init({
		comment: DataTypes.TEXT,
		walletId: DataTypes.STRING,
		isDeleted: DataTypes.BOOLEAN,
	}, {
		sequelize,
		modelName: 'Comment',
	});

	Comment.beforeCreate(comment => comment.id = uuid.v4());

	return Comment;
};