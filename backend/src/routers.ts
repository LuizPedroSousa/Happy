import express from 'express';

const Router = express.Router();

Router.get('/', (req, res) => {
    res.status(201).json({
        hello: 'world',
    })
});

export { Router };