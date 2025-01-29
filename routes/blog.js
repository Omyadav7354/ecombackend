const Blog = require("../model/Blogs");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json(`Error Occured : ${error.message}`);
  }
});


router.get("/", async (req, res) => {
    try {
      const Blogs = await Blog.find(req.body)
      res.status(200).json(Blogs);
    } catch (error) {
      res.status(500).json(`Error Occured : ${error.message}`);
    }
  });

module.exports = router
