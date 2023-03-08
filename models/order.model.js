import { model as DBModel, Schema as DBSchema } from 'mongoose';
const $types = DBSchema.Types;

// TODO: Add NIF as optional.
const OrderSchema = new DBSchema(
  {
    customer: { type: $types.ObjectId, ref: 'customer', required: true },
    status: { type: String, required: true },
    salt: { type: String, required: true },
    cart: [
      {
        product: { type: $types.ObjectId, ref: 'product', required: true },
        amount: { type: Number, required: true },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, $) {
        delete $['__v'];
      },
    },
    timestamps: true,
  }
);

OrderSchema.pre('validate', () => {
  // Revise if schema data is valid before creating record.
});

OrderSchema.pre('save', () => {
  // Removes items that the amount is 0.
});

export default DBModel('order', OrderSchema, 'order');
