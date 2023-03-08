import { model as DBModel, Schema as DBSchema } from 'mongoose';
const $types = DBSchema.Types;

const OrderSchema = new DBSchema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    phone: String,
    address: [{ type: $types.ObjectId, ref: 'address', require: true }],
    cart: [
      {
        product: { type: $types.ObjectId, ref: 'product', required: true },
        amount: { type: Number, required: true },
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

OrderSchema.pre('validate', () => {
  // Revise if schema data is valid before creating record.
});

OrderSchema.pre('save', () => {
  // If password is included, hash with the salt and override it.
});

export default DBModel('order', OrderSchema, 'order');
