import { PostModel } from "../models/PostModel.js";
export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();// lay tat ca du lieu tu data
        console.log(posts);
        res.status(200).json(posts);// thanh cong
    } catch (err) {
        res.status(500).json({error: err});// loi
    }
}

export const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        const post = new PostModel(newPost);// tao du lieu moi
        await post.save();// luu lai
        res.status(200).json(post);

    } catch (err) {
        res.status(500).json({erro: err})
    }
};

export const updatePost = async (req, res) => {
    try {
        const update = req.body;
        const post = await PostModel.findOneAndUpdate({_id: updatePost._id}, updatePost, {new: true});
        res.status(200).json(post);

    } catch (err) {
        res.status(500).json({erro: err})
    }
};