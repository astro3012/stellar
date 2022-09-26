import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    createdBy: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('Post not found.');

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    },
  );

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('Post not found.');

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: 'Post deleted!' });
};

export const starPost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.send({ message: 'User not authenticated.' });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('Post not found.');

  const post = await PostMessage.findById(id);

  const index = post.stars.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    post.stars.push(req.userId);
  } else {
    post.stars = post.stars.filter((id) => id !== String(req.userId));
  }
  const starredPost = await PostMessage.findByIdAndUpdate(id, post, {
    new: true,
  });

  res.json(starredPost);
};
