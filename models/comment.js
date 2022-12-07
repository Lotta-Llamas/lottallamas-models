'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		static associate(models) {
			Comment.belongsTo(models.Post, { foreignKey: 'postId' })
		}
	}

	Comment.init({
		comment: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'Comment',
	});

	Comment.beforeCreate(comment => comment.id = uuid.v4());

	return Comment;
};