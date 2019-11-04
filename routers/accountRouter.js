const express = require('express');
const knex = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
    knex
    .select('*')
    .from('accounts')
    .then(accounts => res.status(200).json(accounts))
    .catch(err => res.status(500).json({ error: 'Failed to get accounts' }))
})

router.post('/', (req, res) => {
    knex
    .insert(req.body, 'id')
    .into('accounts')
    .then(newAccount => res.status(201).json(newAccount))
    .catch(err => res.status(500).json({ error: 'Failed to add new account' }))

})

router.put('/:id', (req, res) => {
    knex('accounts')
    .where({ id: req.params.id})
    .update(req.body)
    .then(updated => res.status(200).json(updated))
    .catch(err => res.status(500).json({ error: 'Failed to update account' }))
})

module.exports = router;