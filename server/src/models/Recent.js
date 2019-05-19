module.exports = (sequelize, DataTypes) => {
  const Recent = sequelize.define('Recent', {})

  Recent.associate = function (models) {
    Recent.belongsTo(models.User)
    Recent.belongsTo(models.Song)
  }

  return Recent
}
