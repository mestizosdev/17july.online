import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import ping from './ping/ping'
import greet from './greet/greet'

const server = new Hono()

server.get('/', (c) => {
  return c.text('Hello Hono!')
})

server.route('/',ping)
server.route('/',greet)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: server.fetch,
  port
})
