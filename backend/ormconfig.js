require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? './test.env' : './dev.env'
});

module.exports = {
    type: process.env.DB_TYPE,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [process.env.DB_ENTITIES],
    migrations: [process.env.DB_MIGRATIONS],
    cli: {
        migrationsDir: [process.env.DB_MIGRATIONS_DIR]
    }
};
