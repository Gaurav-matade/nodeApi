import Fastify from 'fastify'
import userRoute from "./src/route/user.route"
import sequelize from './src/DB/connection'
import dotenv from 'dotenv'
import cors from '@fastify/cors'

dotenv.config()

const app = async () => {
  const fastify = Fastify({ logger: true })

  // ✅ Correct CORS for Fastify v5
  await fastify.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })

  try {
    await sequelize.authenticate()
    console.log("✅ Database Connected Successfully")
    await sequelize.sync({ alter: true })
  } catch (err) {
    console.error("❌ Database connection failed", err)
    process.exit(1)
  }

  fastify.register(userRoute)

  const PORT = process.env.PORT || 3000

  await fastify.listen({
    port: Number(PORT),
    host: '0.0.0.0'
  })

  console.log(`🚀 Server running on port ${PORT}`)
}

app()
