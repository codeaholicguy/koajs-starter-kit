import {controller, get} from 'route-decorators'
import HttpStatusCodes from 'http-status-codes'

import BaseController from './base'

@controller('/sample')
export default class SampleController extends BaseController {
  @get('/hello/:name')
  async sayHello(ctx, next) {
    ctx.body = `Hello ${ctx.params.name}`
  }

  @get('/goodbye')
  async goodbye(ctx, next) {
    ctx.status = HttpStatusCodes.OK
  }
}
