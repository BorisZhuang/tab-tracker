const { Recent, Song } = require('../models')
const _ = require('lodash')

module.exports = {
  async index (req, res) {
    try {
      const userId = req.user.id
      const recents = await Recent.findAll({
        where: {
          UserId: userId
        },
        include: [
          {
            model: Song
          }
        ]
      })
        .map(recent => recent.toJSON())
        .map(recent => _.extend(
          {},
          recent.Song,
          recent
        ))

      res.send(_.uniqBy(recents, recent => recent.SongId))
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the recently viewed songs.'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.user.id
      const { songId } = req.body
      const recent = await Recent.create({
        SongId: songId,
        UserId: userId
      })
      res.send(recent)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the history.'
      })
    }
  }
}
