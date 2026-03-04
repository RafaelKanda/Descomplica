import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "lgpd-database",
  "postgres",
  "postgres",

  {
    host: "localhost",
    dialect: "postgree",
    port: 5432,
    define: {
      timestamps: false,
    },
  },
);

export default sequelize;
