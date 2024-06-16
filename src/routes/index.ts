// src/routes/index.ts
import express from 'express';
import roomRoutes from './rooms'
import reservationRoutes from './reservations';

const router = express.Router();

router.use('/rooms', roomRoutes);
router.use('/reservations', reservationRoutes);

export default router;
