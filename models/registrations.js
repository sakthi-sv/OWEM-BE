"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Registrations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Registrations.belongsTo(models.Users, { foreignKey: "user" });
      Registrations.belongsTo(models.Courses, { foreignKey: "course" });
    }
  }
  Registrations.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {
      sequelize,
      modelName: "Registrations",
    }
  );
  return Registrations;
};
