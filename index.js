const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const moment = require("moment");
const Blog = require("./models/blog");

mongoose
  .connect("mongodb://localhost:27017/blogApp")
  .then(() => {
    console.log("MongoDb Connection Established");
  })
  .catch((err) => {
    console.log("oh uh !! something went wrong");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const { created_at } = req.query;
  if (created_at) {
    const blogs = await Blog.find({ created_at });
    res.render("index", { blogs, created_at });
  } else {
    const blogs = await Blog.find({});
    res.render("index", { blogs, created_at: "All" });
  }
});

app.get("/new", (req, res) => {
  res.render("new");
});

app.post("/", async (req, res) => {
  const b = new Blog(req.body);
  await b.save();
  res.redirect(`/${b._id}`);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const blogs = await Blog.findById(id);
  res.render("show", { blogs });
});

app.get("/:id/edit", async (req, res) => {
  const { id } = req.params;
  const blogs = await Blog.findById(id);
  res.render("edit", { blogs });
});

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/${blog._id}`);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndDelete(id);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
