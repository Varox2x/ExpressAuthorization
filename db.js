import pg from 'pg';
const {Pool} = pg;

let localConfig = {
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: '5432',
    database: 'jwttutorial'
};

const poolConfig = process.env.DATABASE_URL ? {
    connectionString: process.env.DATABASE_URL, 
    ssl: {rejectUnauthorized:false}
    } : localConfig;

const pool = new Pool(poolConfig);

export default pool;