import { model as DBModel, Schema as DBSchema } from 'mongoose';
const $types = DBSchema.Types;

const VendorSchema = new DBSchema(
  {
    customer: {
      type: $types.ObjectId,
      ref: 'customer',
      required: true,
      unique: true,
    },
    sellables: [{ type: $types.ObjectId, ref: 'product', require: true }],
    orders: [
      {
        product: { type: $types.ObjectId, ref: 'product', required: true },
        amount: { type: Number, required: true },
        customer: { type: $types.ObjectId, ref: 'customer', required: true },
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

VendorSchema.pre('validate', () => {
  // Revise if schema data is valid before creating record.
});

export default DBModel('vendor', VendorSchema, 'vendor');
