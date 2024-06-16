// src/routes/reservations.ts
import express from 'express';
import { createReservation, getReservations, checkAvailability } from '../controllers/reservationController';

const router = express.Router();

router.post('/', createReservation);
router.get('/', getReservations);
router.get('/availability', checkAvailability);

export default router;
