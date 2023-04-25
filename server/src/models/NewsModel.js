
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    source: {
      id: String,
      name: String
    },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date,
    content: String
  });
  
  const News = mongoose.model('newsArticles', newsSchema);
  
  module.exports = News;