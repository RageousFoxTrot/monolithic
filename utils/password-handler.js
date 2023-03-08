import { genSalt, hash } from 'bcrypt';
import {} from 'jsonwebtoken';
import CONFIG from '../config.js';

export async function GenerateSalt() {
  return await genSalt();
}

export async function GeneratePassword(pwd, salt) {
  return await hash(pwd, salt);
}

export async function ValidatePassword(pwd, doc_pwd, salt) {
  const $pwd_hashed = await GeneratePassword(pwd, salt);
  return $pwd_hashed === doc_pwd;
}
