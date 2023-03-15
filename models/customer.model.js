import { model as DBModel, Schema as DBSchema } from 'mongoose';
import { isEmail, isValidPassword, isPhoneValid } from '../utils/validators.js';
const $types = DBSchema.Types;

const CostumerSchema = new DBSchema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: ($) => isEmail($),
        message: 'Email is not valid.',
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: ($) => isValidPassword($),
        message: 'Password is not valid.',
      },
    },
    salt: { type: String, required: true },
    phone: {
      type: String,
      unique: true,
      validate: {
        validator: ($) => isPhoneValid($),
        message: 'Phone number is not valid.',
      },
    },
    address: [{ type: $types.ObjectId, ref: 'address', require: true }],
    cart: [
      {
        product: { type: $types.ObjectId, ref: 'product', required: true },
        amount: { type: Number, required: true, min: 1 },
      },
    ],
    orders: [{ type: $types.ObjectId, ref: 'order', required: true }],
    wishlist: [{ type: $types.ObjectId, ref: 'order', required: true }],
    vendor: { type: $types.ObjectId, ref: 'vendor', default: null },
  },
  {
    toJSON: {
      transform(doc, $) {
        delete $['__v'];
        delete $['password'];
        delete $['salt'];
      },
    },
    timestamps: true,
  }
);

CostumerSchema.pre('save', () => {
  // If password is included, hash with the salt and override it.
});

export default DBModel('customer', CostumerSchema, 'customer');
