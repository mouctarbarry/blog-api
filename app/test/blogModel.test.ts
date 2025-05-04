import mongoose from "mongoose";
import { Post } from "../src/models/Post";
import {loadEnvConfig} from "../src/utils/env-utils";

// Charger la configuration en fonction de l'environnement (par défaut : 'local')
loadEnvConfig();

beforeAll(async () => {
    try {
        // Connexion à MongoDB
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error("La variable MONGODB_URI est manquante.");
        }
        await mongoose.connect(mongoURI, {
        });
    } catch (err) {
        console.error("Erreur de connexion à MongoDB :", err);
    }
});

afterAll(async () => {
    try {
        // Supprimer toutes les collections pour éviter de futurs conflits
        await mongoose.connection.dropDatabase();
        await mongoose.disconnect();
    } catch (err) {
        console.error("Erreur lors de la déconnexion ou de la suppression :", err);
    }
});

describe('Test du modèle Blog', () => {
    it('doit créer et sauvegarder un blog avec succès', async () => {
        const post = new Post({
            title: "Kubernetes the Hard Way: By Mouctar",
            content: "Un guide détaillé pour apprendre Kubernetes à partir de zéro.",
            author: new mongoose.Types.ObjectId(),
        });

        // Sauvegarder le post dans MongoDB
        const savedPost = await post.save();

        // Vérifications des attentes
        expect(savedPost._id).toBeDefined();
        expect(savedPost.title).toBe("Kubernetes the Hard Way: By Mouctar");
        expect(savedPost.content).toBe("Un guide détaillé pour apprendre Kubernetes à partir de zéro.");
        expect(savedPost.author).toBeInstanceOf(mongoose.Types.ObjectId);
    });

    it('doit échouer si un champ obligatoire manque', async () => {
        const post = new Post({
            content: "Pas de titre ici.",
        });

        // Gestion des erreurs attendues
        let err;
        try {
            await post.save();
        } catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        if (err instanceof mongoose.Error.ValidationError){
            expect(err.errors.title).toBeDefined();
        }
    });
});