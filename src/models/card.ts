import { Schema, model } from "mongoose";

interface ICard {
  name: string;
  link: string;
  owner: Schema.Types.ObjectId;
  likes: Schema.Types.ObjectId[] | [];
  createdAt: Date;
}

const cardSchema = new Schema<ICard>({
  name: {
    type: String,
    required: [true, "Поле обязательно для заполнения"],
    minLength: [2, "Минимальная длина 2 символа"],
    maxLength: [30, "Максимальная длина 30 символов"],
  },
  link: {
    type: String,
    required: [true, "Поле обязательно для заполнения"],
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: [true, "Поле обязательно для заполнения"],
  },
  likes: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model<ICard>("card", cardSchema);
