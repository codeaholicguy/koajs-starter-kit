import App from './app'

const app = new App({
  port: process.env.PORT
})

app.listen()

export default app.server()
