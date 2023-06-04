const router = require('express').Router()
const racesCtrl = require('../controllers/races.js')

router.post('/', racesCtrl.create)

router.get('/', racesCtrl.index)

router.put('/:raceId', racesCtrl.update)

router.delete('/:raceId', racesCtrl.delete)

module.exports = router