const express = require('express');
const knex = require('../data/dbConfig.js');
const validateAccount = require('../middleware/validateAccount');

const router = express.Router();

router.get('/', (req, res) => {
    knex
    .select('*')
    .from('accounts')
    .then(accounts => res.status(200).json(accounts))
    .catch(err => res.status(500).json({ error: 'Failed to get accounts' }))
})

router.post('/', validateAccount, (req, res) => {
    knex
    .insert(req.body, 'id')
    .into('accounts')
    .then(newAccount => res.status(201).json(newAccount))
    .catch(err => res.status(500).json({ error: 'Failed to add new account' }))

})

router.put('/:id', validateAccount, (req, res) => {
    knex('accounts')
    .where({ id: req.params.id})
    .update(req.body)
    .then(updated => res.status(200).json(updated))
    .catch(err => res.status(500).json({ error: 'Failed to update account' }))
})

router.delete('/:id', (req, res) => {
    knex('accounts')
    .where({ id: req.params.id})
    .del()
    .then(deleted => res.status(200).json(deleted))
    .catch(err => res.status(500).json({ error: 'Failed to delete account' }))
})

// woo mvp complete

module.exports = router;