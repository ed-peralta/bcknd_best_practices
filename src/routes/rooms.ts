// src/routes/rooms.ts
import express from 'express';
import { createRoom, getRooms } from '../controllers/roomController';

const router = express.Router();

router.post('/', createRoom);
router.get('/', getRooms);

export default router;
