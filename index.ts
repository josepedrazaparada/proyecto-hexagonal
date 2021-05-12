import express from "express";
import bodyParser from 'body-parser';
import defaultRouter from './src/infraestructure/routes';

const app = express();
const PORT = 3001;

app.use(bodyParser());

app.listen(PORT, () => {
  console.log("Corriendo server");
  app.use('/app', defaultRouter);
});
