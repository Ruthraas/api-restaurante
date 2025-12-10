export default {
  client: "sqlite3",
  connection: {
    filename: "./src/database/app.db",
  },
  useNullAsDefault: true,
  migrations: {
    extensions: "ts",
    diretory: "./src/database/seeds",
  },
};
