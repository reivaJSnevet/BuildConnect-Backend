import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	dialect: 'mysql',
	timezone: '-06:00',
	logging: false,
	define: {
		timestamps: false,
		paranoid: false,
		freezeTableName: true,
	},
	pool: {
		max: 5,
		min: 0,
		idle: 10000,
		acquire: 30000,
	},
});

export async function dbConnection() {
	try {
		await db.authenticate({});
		console.log('\x1b[36m%s\x1b[0m', 'Connection has been established successfully.');

		try {
			//synchronizing the models with the database
			await db.sync({ alter: false });
			console.log('\x1b[36m%s\x1b[0m', 'All models were synchronized successfully.');
		} catch (error) {
			console.error('\x1b[31m%s\x1b[0m', 'Unable to synchronize the models with the database:', error);
		}
	} catch (error) {
		console.error('\x1b[31m%s\x1b[0m', 'Unable to connect to the database:', error);
	}
}

export default db;
