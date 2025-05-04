import dotenv from 'dotenv';

export const loadEnvConfig = (defaultEnv: string = 'local') => {
    const env = process.env.NODE_ENV || defaultEnv;

    if (!process.env.MONGODB_URI || !process.env.PORT) {
        dotenv.config({ path: `.env.${env}` });
    }

    console.log(`Environnement chargé : ${env}`);
    console.log(`MongoDB URI : ${process.env.MONGODB_URI}`);
    console.log(`Port : ${process.env.PORT}`);
};