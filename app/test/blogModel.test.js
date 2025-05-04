"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Post_1 = require("../src/models/Post");
const env_utils_1 = require("../src/utils/env-utils");
// Charger la configuration en fonction de l'environnement (par défaut : 'local')
(0, env_utils_1.loadEnvConfig)();
beforeAll(async () => {
    try {
        // Connexion à MongoDB
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error("La variable MONGODB_URI est manquante.");
        }
        await mongoose_1.default.connect(mongoURI, {});
    }
    catch (err) {
        console.error("Erreur de connexion à MongoDB :", err);
    }
});
afterAll(async () => {
    try {
        // Supprimer toutes les collections pour éviter de futurs conflits
        await mongoose_1.default.connection.dropDatabase();
        await mongoose_1.default.disconnect();
    }
    catch (err) {
        console.error("Erreur lors de la déconnexion ou de la suppression :", err);
    }
});
describe('Test du modèle Blog', () => {
    it('doit créer et sauvegarder un blog avec succès', async () => {
        const post = new Post_1.Post({
            title: "Kubernetes the Hard Way: By Mouctar",
            content: "Un guide détaillé pour apprendre Kubernetes à partir de zéro.",
            author: new mongoose_1.default.Types.ObjectId(),
        });
        // Sauvegarder le post dans MongoDB
        const savedPost = await post.save();
        // Vérifications des attentes
        expect(savedPost._id).toBeDefined();
        expect(savedPost.title).toBe("Kubernetes the Hard Way: By Mouctar");
        expect(savedPost.content).toBe("Un guide détaillé pour apprendre Kubernetes à partir de zéro.");
        expect(savedPost.author).toBeInstanceOf(mongoose_1.default.Types.ObjectId);
    });
    it('doit échouer si un champ obligatoire manque', async () => {
        const post = new Post_1.Post({
            content: "Pas de titre ici.",
        });
        // Gestion des erreurs attendues
        let err;
        try {
            await post.save();
        }
        catch (error) {
            err = error;
        }
        expect(err).toBeInstanceOf(mongoose_1.default.Error.ValidationError);
        if (err instanceof mongoose_1.default.Error.ValidationError) {
            expect(err.errors.title).toBeDefined();
        }
    });
});
