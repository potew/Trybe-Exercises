const postsModel = require('../model');

const findPosts = () => {
    const posts = postsModel.findPosts();
    if (!posts) {
      return { err: true, message: { err: 'nenhum post encontrado' } }
    }
    return posts;
}

const findPostById = (id) => {
    const post = postsModel.findPostById(id);
    if (!post) {
      return { err: true, message: { err: 'id não encontrado.'} }
    }
    return post;
}

module.exports = {
    findPostById,
    findPosts,
};
