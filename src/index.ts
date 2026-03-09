import express from 'express';
import  Database  from "./config/database"
import routes from './routes';
import errorHandler from './middlewares/erroHandler';
const app = express();


app.use(express.json());
app.use('/api', routes);

app.use(errorHandler)

const db = Database.getInstance()

async function startServer() {
  try {
    await db.connect();

    app.listen(3000, () => {
      console.log('🚀 Servidor rodando na porta 3000');
    });

  } catch (error) {
    console.error('❌ Erro ao iniciar:', error);
    process.exit(1);
  }
}

startServer();