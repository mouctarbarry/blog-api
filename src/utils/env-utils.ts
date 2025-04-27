import dotenv from 'dotenv';

export const loadEnvConfig = (defaultEnv: string = 'local') => {
    const env = process.env.NODE_ENV || defaultEnv;
    dotenv.config({ path: `.env.${env}` });
    console.log(`env : ${env}`);
};