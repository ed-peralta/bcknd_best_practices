// src/controllers/roomController.ts
import { Request, Response } from 'express';
import Room, { IRoom } from '../models/Room';

export const createRoom = async (req: Request, res: Response): Promise<void> => {
  try {
    const room: IRoom = new Room(req.body);
    await room.save();
    res.status(201).send(room);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getRooms = async (req: Request, res: Response): Promise<void> => {
  try {
    const rooms: IRoom[] = await Room.find();
    res.status(200).send(rooms);
  } catch (error) {
    res.status(500).send(error);
  }
};
