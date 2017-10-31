## KoaJS Starter Kit — <a href="https://github.com/codeaholicguy/koajs-starter-kit/stargazers"><img src="https://img.shields.io/github/stars/codeaholicguy/koajs-starter-kit.svg?style=social&label=Star&maxAge=3600" height="20"></a>

Simple starter kit for using KoaJS to build a web application written in ES7.

## Getting Started

Just clone and explore it!

## Sample

```js
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
```

## License

MIT


