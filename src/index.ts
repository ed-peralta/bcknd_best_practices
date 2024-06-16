import express, { Request, Response } from 'express';


const app = express()

const port = 8000;


app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
  });

app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola desde Express con TypeScript!');
});