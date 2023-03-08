import { ValidatePassword } from '../../utils/password-handler.js';
import unauthorizedMiddleware from './unauthorized.middleware.js';

export default async function (req, res, next) {
  const $authorization = await ValidatePassword(req);

  return $authorization ? next() : unauthorizedMiddleware(req, res, next);
}
