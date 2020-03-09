'use strict'

class TodoController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
}

module.exports = TodoController
