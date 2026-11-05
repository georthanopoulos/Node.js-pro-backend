import express from 'express';

import userRoutes from './rootes/user.rootes';

const app = express();

app.use('/api/user', userRoutes);