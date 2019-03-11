module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define("Person", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    favoriteCity: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        
      }
    }
  });

  return Person;
};
