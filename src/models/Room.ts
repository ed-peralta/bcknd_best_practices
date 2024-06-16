import mongoose, { Document, Schema } from 'mongoose';

export interface IRoom extends Document {
  name: string;
  capacity: number;
  price: number;
}

const RoomSchema: Schema = new Schema({
  name: { type: String, required: true },
  capacity: { type: Number, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model<IRoom>('Room', RoomSchema);
