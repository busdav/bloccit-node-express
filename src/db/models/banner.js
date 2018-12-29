'use strict';
module.exports = (sequelize, DataTypes) => {
  var Banner = sequelize.define('Banner', {
    source: DataTypes.STRING,
    description: DataTypes.STRING,
    topicId: {
      type: DataTypes.INTEGER,
      allowNull: false
      }
  },{});

  Banner.associate = function(models) {
     Banner.belongsTo(models.Topic, {
       foreignKey: "topicId",
       onDelete: "CASCADE",
     });
  };
  return Banner;
};
