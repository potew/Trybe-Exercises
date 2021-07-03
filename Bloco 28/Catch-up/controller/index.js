const service = require('../service');

const postById =  async (req, res) => {
  const { id } = req.params;
  const post = await service.findPostById(id);
  
  if (post.err) {
    return res.status(422).json(post.message);
  }
  return res.status(200).json(post);
}


const allPosts =  async (_req, res) => {
  const posts = await service.findPosts();
  if (posts.err) {
    return res.status(422).json(posts.message);
  }
  return res.status(200).json(posts);
};

module.exports = {
  postById,
  allPosts,
}