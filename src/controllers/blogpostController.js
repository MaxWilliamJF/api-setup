const { blogpost } = require('../app/models');
const helper = require('../helpers');

module.exports = {
    /**
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     * @description
     * Creates a new post owned by current user and returns it
     * @todo:
     * - Verify if slug has already been used
     * - Verify if status is valid
     * - Set correct status code on error
     */
    create: async (req, res, next) => {
        const userId = req.userId;
        const { title, content, status } = req.body;
        
        if (!title || !content) {
            return next(new Error('Title and content are required'));
        }

        const slug = helper.createSlug(title);

        try {
            const post = await blogpost.create({
                title,
                content,
                slug,
                status,
                created_by: userId,
            });

            return res.json(post);
        } catch (error) {
            return next(new Error('Internal error while trying to create post'));
        }
    },

    /**
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     * @description
     * Updates a post owned by current user and returns it
     * @todo
     * - Verify if status is valid
     * - Verify if the request has the needed content
     * - Set correct status code on error
     */
    edit: async (req, res, next) => {
        const postId = req.params.id;
        const userId = req.userId;
        const { title, content, status } = req.body;
        const slug = helper.createSlug(title);

        try {
            const post = await blogpost.findByPk(postId);

            if (!post) {
                return next(new Error('Internal error while trying to create post'));
            }
            
            if (post.created_by !== userId) {
                return next(new Error('You are not allowed to edit this post'));
            }

            post.title = title;
            post.slug = slug;
            post.content = content;
            post.status = status;
            post.updatedAt = new Date();

            await post.save();
            return res.json(post);
        } catch (error) {
            return res.status(500).send(error);
        }
    },

    /**
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     * @description
     * Deletes a post by id and returns it
     * @todo
     * - Set correct status code on error
     */
    delete: async (req, res, next) => {        
        const postId = req.params.id;
        const userId = req.userId;

        if (!postId) {
            return next(new Error('Post id is required'));
        }

        try {
            const post = await blogpost.findByPk(postId);
            if (!post) {
                return next(new Error('Post not found'));
            }

            if (post.created_by !== userId) {
                return next(new Error('You are not allowed to delete this post'));
            }

            await post.destroy(postId);
            return res.send({ 'deleted': post });
        } catch (error) {
            return res.status(500).send(error);
        }
    },

    /**
     * @param {Object} req
     * @param {Object} res
     * @returns {Array}
     * @description
     * Returns all published posts
     */
    findAll: async (req, res) => {
        try {
            const posts = await blogpost.findAll({
                where: {
                    status: 'published'
                }
            });
            return res.json(posts);
        } catch (error) {
            return res.status(500).send(error);
        }
    },

    /**
     * @param {Object} req
     * @param {Object} res
     * @returns {Object}
     * @description
     * Returns a post by slug
     */
    findBySlug: async (req, res) => {
        const { slug } = req.params;
        try {
            const post = await blogpost.findOne({
                where: {
                    slug: slug,
                    status: 'published'
                }
            });

            if (!post) {
                return res.status(404).send({ message: 'Post not found' });
            }

            return res.send(post);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
}