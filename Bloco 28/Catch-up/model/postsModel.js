// Mock do BD
const posts = [
  {
    id: 2,
    author: 'Antonio Neto',
    comment: "Hoje o dia está maneiro!"
  },
  {
    id: 3,
    author: "Rodrigo Garga",
    comment: "To aqui também"
  }
];

const findPosts = () => {
  return posts;
}

const findPostById = (id) => {
  return posts.filter( (el) => el.id === id );
}

module.exports = {
    findPosts,
    findPostById,
};