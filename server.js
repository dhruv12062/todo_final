const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const app=require('./src/app')
const connectDB=require('./src/db/db')
const bootstrapAdmin=require('./src/db/bootstrapAdmin')

async function startServer() {
    try {
        await connectDB()
        await bootstrapAdmin()
        app.listen(3000,()=>{
            console.log("Server Running")
        })
    } catch (err) {
        console.error('Server startup failed:', err.message)
        process.exit(1)
    }
}

startServer()
