module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("Item", {
    name: DataTypes.STRING,
    // age: DataTypes.INTEGER,
    // favoriteCity: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        Item.hasMany(models.Person)
      }
    }
  });

  return Item;
};
