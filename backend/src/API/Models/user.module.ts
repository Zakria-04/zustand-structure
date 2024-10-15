import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  userPass: {
    type: String,
    required: true,
  },
});

const USER_MODEL = model("code-structure_server", UserSchema);
export default USER_MODEL;
