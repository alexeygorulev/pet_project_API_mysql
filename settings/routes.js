'use strict'

module.exports = (app) => {
    const usersController = require('../controller/CommentController')
    const urlComments = '/comments'
    app.route(urlComments).get(usersController.comment)
    app.route(urlComments).post(usersController.addComment)
    app.route(urlComments).put(usersController.updateComment)
    app.route(urlComments).delete(usersController.deleteComment)

}