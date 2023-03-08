import { model as DBModel, Schema as DBSchema } from 'mongoose';
const $types = DBSchema.Types;

const AddressSchema = new DBSchema(
  {
    street: { type: String, required: true },
    number: { type: String, required: true },
    location: { type: String, required: true },
    country: { type: String, required: true },
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

AddressSchema.pre('validate', () => {
  // Revise if schema data is valid before creating record.
  // Verify if country is whitelisted, conforming with ISO 3166-1 alpha-3.
});

export default DBModel('address', AddressSchema, 'address');
