import { model as DBModel, Schema as DBSchema } from 'mongoose';
const $types = DBSchema.Types;

// TODO: Add product variations.
const ProductSchema = new DBSchema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
    vendor: { type: $types.ObjectId, ref: 'vendor', require: true },
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

ProductSchema.pre('validate', () => {
  // Revise if schema data is valid before creating record.
});

ProductSchema.pre('save', () => {
  // If password is included, hash with the salt and override it.
  // Verify if stock will be valid.
});

ProductSchema.methods.transactStock = function ({ amount }) {
  // If transaction is not possible, throw an error.
};

export default DBModel('product', ProductSchema, 'product');
