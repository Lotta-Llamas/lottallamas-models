'use strict';
const { Model } = require('sequelize');
const uuid = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    static associate(models) {
      Media.belongsTo(models.Wallet, { foreignKey: 'walletId' });
    }
  }

  Media.init({
      walletId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      usage: DataTypes.ENUM({
        values: ['post', 'avatar', 'content']
      }),
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      isPublic: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
  }, {
    sequelize,
    modelName: 'Media',
  });

  Media.beforeCreate(media => media.id = uuid.v4());

  return Media;
};