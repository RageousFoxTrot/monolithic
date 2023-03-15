import { CustomerModel } from '../models';
import { APIError } from '../utils/app-errors';
import Val from 'validator';
import { isEmail } from '../utils/validators.js';

class CustomerService {
  constructor() {}

  async CreateCustomer({ email, password, phone, salt }) {
    try {
      const $$customer = new CustomerModel({
        email,
        password,
        phone,
        salt,
      });

      return await $$customer.save();
    } catch (e) {
      throw new APIError();
    }
  }

  async CreateAddress() {}
  async AddItemToCart() {}
  async AddOrderToProfile() {}
  async AddProductToWishlist() {}
  async CreateVendorStore() {}

  async FindCustomer() {}
  async FindCustomerByID() {}

  async RemoveItemsFromCart() {}
  async RemoveAddress() {}
  async RemoveItemsFromWhitelist() {}
  async DeleteVendor() {}
  async DeleteUser() {}
}
