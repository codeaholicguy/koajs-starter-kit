import Router from 'koa-router'

export default class BaseController {
  constructor() {
    this.router = new Router()

    for (const {method, url, middleware, fnName} of this.$routes) {
      this.router[method](url, ...middleware, this[fnName].bind(this))
    }
  }
}
