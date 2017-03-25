
module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    favoriteCity: DataTypes.STRING,
  }, {
    // classMethods: {
    //   associate: function(models) {
    //     // Using additional options like CASCADE etc for demonstration
    //     // Can also simply do Person.belongsTo(models.User);
    //     Person.belongsTo(models.User, {
    //       onDelete: "CASCADE",
    //       foreignKey: {
    //         allowNull: false
    //       }
    //     });
    //   }
    // }
  });

  return Person;
};
