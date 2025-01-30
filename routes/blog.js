const Blog = require("../model/Blog");
const express = require('express')
const router = express.Router()

router.post('/', async(req, res)=>{
    try {
        const blog = new Blog(req.body)
        await blog.save()
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json(`Error: ${error.message}`)
    }
})
router.get('/', async(req, res)=>{
    try {
        const Blogs = await Blog.find(req.body)
        res.status(200).json(Blogs)
        
    } catch (error) {
        res.status(500).json(`Error: ${error.message}`)
    }
})
router.delete('/:id', async(req, res)=>{
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        res.status(200).json(blog)
        
    } catch (error) {
        res.status(500).json(`Error: ${error.message}`)
    }
})
router.put('/:id', async(req, res)=>{
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body)
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog)

        
    } catch (error) {
        res.status(500).json(`Error: ${error.message}`)
    }
})

module.exports = router