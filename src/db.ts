// src/db.ts
import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect('mongodb://localhost:27017/hotel-reservations');
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error conectando a MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;
