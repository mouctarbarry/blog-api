import express from 'express';
import mongoose from "mongoose";
import {loadEnvConfig} from "./utils/env-utils";
import userRoutes from "./routes/user.routes";
import postRoutes from "./routes/post.routes";


const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur en écoute sur http://localhost:${PORT}`);
});

app.get('/', (_, res) => {
    res.send('Bienvenue sur l’API TypeScript MongoDB 🎉');
});
/*


loadEnvConfig()

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI || '';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB connecté avec succès');
        app.listen(PORT, () => {
            console.log(`🚀 Serveur en écoute sur http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('❌ Erreur de connexion MongoDB :', err.message);
    });

app.get('/', (_, res) => {
    res.send('Bienvenue sur l’API TypeScript MongoDB 🎉');
});

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);

 */