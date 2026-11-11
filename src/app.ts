import express from 'express';
import userRoutes from './routes/user.routes';

const app = express();
app.use(express.json());

app.use('/api/user', userRoutes);
// app.use('/api/roles', roleRoutes);


export default app;