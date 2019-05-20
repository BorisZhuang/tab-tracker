const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const RecentsController = require('./controllers/RecentsController')
const IsAuthenticated = require('./policies/IsAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/songs',
    SongsController.index)
  app.post('/songs',
    SongsController.post)
  app.get('/songs/:songId',
    SongsController.show)
  app.put('/songs/:songId',
    SongsController.put)

  app.get('/bookmarks',
    IsAuthenticated,
    BookmarksController.index)
  app.post('/bookmarks',
    IsAuthenticated,
    BookmarksController.post)
  app.delete('/bookmarks/:bookmarkId',
    IsAuthenticated,
    BookmarksController.delete)

  app.get('/history',
    IsAuthenticated,
    RecentsController.index)
  app.post('/history',
    IsAuthenticated,
    RecentsController.post)
}
