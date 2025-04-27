import { Request, Response } from "express";
import { Post } from "../models/Post";

export const createPost = async (req: Request, res: Response) => {
    try {
        const { title, content, author } = req.body;
        const post = new Post({ title, content, author });
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message });
    }
};

export const getPosts = async (_req: Request, res: Response) => {
    try {
        const posts = await Post.find().populate('author');
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: (err as Error).message });
    }
};

export const getPostById = async (req: Request, res: Response) => {
    try {
        const post = await Post.findById(req.params.id).populate('author');
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message });
    }
};

export const updatePost = async (req: Request, res: Response) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json({ error: (err as Error).message });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        const deleted = await Post.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: 'Post not found' });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: (err as Error).message });
    }
};

