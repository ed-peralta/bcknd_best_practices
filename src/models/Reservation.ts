// src/models/Reservation.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IReservation extends Document {
  room: mongoose.Types.ObjectId;
  guestName: string;
  fromDate: Date;
  toDate: Date;
}

const ReservationSchema: Schema = new Schema({
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  guestName: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
});

export default mongoose.model<IReservation>('Reservation', ReservationSchema);
