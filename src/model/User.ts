import mongoose from 'mongoose';

export interface Message {
  _id: string;
  content: string;
  createdAt: Date;
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  messages: [
    {
      content: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

export default UserModel;
