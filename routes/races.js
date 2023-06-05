const router = require('express').Router()
const racesCtrl = require('../controllers/races.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)

router.post('/', checkAuth, racesCtrl.create)

router.get('/', checkAuth, racesCtrl.index)

router.put('/:raceId', checkAuth, racesCtrl.update)

router.delete('/:raceId', checkAuth, racesCtrl.delete)

module.exports = router