const { Race } = require('../models')

const create = async (req, res) => {
  try {
    req.body.creatorId = req.user.profile.id
    const race = await Race.create(req.body)
    res.status(200).json(race)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const race = await Race.findAll()
    res.status(200).json(race)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const race = await Race.update(
      req.body,
      { where: { id: req.params.raceId }, returning: true }
    )
    res.status(200).json(race)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteRace = async (req, res) => {
  try {
    const race = await Race.findByPk(req.params.raceId)
    await race.destroy()
    res.status(200).json(race)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteRace
}