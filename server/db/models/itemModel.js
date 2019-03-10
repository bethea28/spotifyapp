module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("Item", {
    name: DataTypes.STRING,
    // age: DataTypes.INTEGER,
    // favoriteCity: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {

      }
    }
  });

  return Item;
};
