// src/controllers/reservationController.ts
import { Request, Response } from 'express';
import Reservation, { IReservation } from '../models/Reservation';
import Room from '../models/Room';

export const createReservation = async (req: Request, res: Response): Promise<void> => {
  try {
    const reservation: IReservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).send(reservation);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getReservations = async (req: Request, res: Response): Promise<void> => {
  try {
    const reservations: IReservation[] = await Reservation.find().populate('room');
    res.status(200).send(reservations);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const checkAvailability = async (req: Request, res: Response): Promise<void> => {
  try {
    const { roomId, fromDate, toDate } = req.query;
    const reservations: IReservation[] = await Reservation.find({
      room: roomId,
      $or: [
        { fromDate: { $lte: toDate }, toDate: { $gte: fromDate } },
      ],
    });
    res.status(200).send(reservations.length === 0);
  } catch (error) {
    res.status(500).send(error);
  }
};
