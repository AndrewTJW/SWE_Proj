import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  userId: { type: String, require: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  pincode: { type: Number, required: true },
  area: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
});

let Address = mongoose.models.address;

if (!Address) {
  Address = mongoose.model("address", addressSchema);
}

export default Address;
