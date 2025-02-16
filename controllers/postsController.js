

const posts = require('../data/posts'); 

const index = (req, res) => {
  res.json(posts); 
};


const show = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId); 

  if (post) {
    res.json(post); 
  } else {
    res.status(404).json({ message: "Post not found" });
  }
};


const destroy = (req, res) => {
  const postId = parseInt(req.params.id); 
  const postIndex = posts.findIndex(p => p.id === postId);

  

  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    console.log(posts);
    res.status(204).send(); 
  } else {
    res.status(404).json({ message: "Post non trovato" }); 
  }
};

module.exports = { index, show, destroy };
const store = (req, res) => {
  const { title, content, image, tags } = req.body;
  const newPost = {
    id: posts.length + 1,  
    title,
    content,
    image,
    tags
  };

  posts.push(newPost);  
  res.status(201).json(newPost);  
};


const update = (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content, image, tags } = req.body;

  const post = posts.find(p => p.id === postId);
  if (post) {
  
    post.title = title;
    post.content = content;
    post.image = image;
    post.tags = tags;

    res.json(post); 
  } else {
    res.status(404).json({ message: "Post non trovato" }); 
  }
};

module.exports = { index, show, destroy, store, update };

