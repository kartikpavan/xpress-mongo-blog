const mongoose = require("mongoose");
const { Schema } = mongoose;
const moment = require("moment");

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  created_at: { type: String },
  updated_at: { type: String },
});

blogSchema.pre("save", function (next) {
  now = new moment().format("MMMM Do YYYY");
  this.updated_at = now;
  if (!this.created_at) {
    this.created_at = now;
  }
  next();
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
